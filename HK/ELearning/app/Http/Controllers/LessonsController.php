<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LessonCreateRequest;
use App\Http\Requests;
use App\Models\Category;
use App\Models\Activity;
use App\Models\Lesson;
use App\Models\Word;
use App\Models\LessonWord;
use Auth;
use Carbon\Carbon;

class LessonsController extends Controller
{
    /**
     * LessonsController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAllWordInCategory($id)
    {
        $category = Category::find($id)->name;
        $words = Category::find($id)->words()->paginate(config('settings.paging_number'));

        return view('user.list_word_in_cate', compact('category', 'words'));
    }

    public function startLesson($id)
    {
        $category = Category::find($id);
        $words = $category->words()->orderByRaw('RAND()')->take(config('settings.count_word'))->get();
        //Create lesson with user current
        $lesson = Auth::user()->lessons()->create([
            'result' => 0,
            'is_completed' => config('settings.not_completed'),
            'category_id' => $category->id
        ]);
        //Get word on lesson
        $lessonWords = [];
        foreach ($words as $word) {
            foreach ($word->wordAnswers()->get() as $ws) {
                $lessonWords[] = [
                    'lesson_id' => $lesson->id,
                    'word_id' => $word->id,
                    'word_answer_id' => $ws->id,
                    'is_answer_user' => config('settings.not_is_answer_user'),
                    'updated_at' => Carbon::now(),
                    'created_at' => Carbon::now(),
                ];
            }
        }

        LessonWord::insert($lessonWords);

        return redirect()->route('category.lessons', [$category->id, $lesson->id]);
    }

    //show lesson has been created
    public function showLesson($id, $lessonId) {
        $category = Category::find($id);
        $lesson = Lesson::find($lessonId);
        //remove identical words
        $words = $lesson->words()->distinct()->get();

        return view('user.lessons', compact('category', 'words', 'lesson'));
    }

    public function responseResult(Request $request, $id, $lessonId)
    {
        $lesson = Lesson::find($lessonId);
        //query word in lesson and remote the same word
        $words = $lesson->words()->distinct()->get();
        $mark = 0;

        foreach ($words as $word) {
            //query user's answer, then change value is_answer_user
            $lessonWord = $lesson->lessonWords()->where('word_answer_id', $request->get('correct-'.$word->id))->first();
            $lessonWord->is_answer_user = config('settings.is_answer_user');
            $lessonWord->save();
            //compare user's wordanswer to correct
            if ($word->getCorrectAnswer()->id == $request->get('correct-'.$word->id)) {
                $mark++;
            }
        }
        $lesson->result = $mark;
        $lesson->is_completed = config('settings.is_completed');
        $lesson->save();

        $activity = new Activity();

        $activity['words'] = $lesson->result;
        $activity['user_id'] = Auth::user()->id;
        $activity['lesson_id'] = $lesson->id;
        $activity->save();

        return redirect()->route('category.lessons.showResult', [$id, $lessonId]);
    }

    public function showResult($id, $lessonId)
    {
        $lesson = Lesson::find($lessonId);
        $words = $lesson->words()->distinct()->get();
        $wordSize = $words->count();
        $wordAnswerIds = LessonWord::select('word_answer_id', 'word_id')->where('is_answer_user', config('settings.is_answer_user'))->where('lesson_id', $lessonId)->get();

        for ($i = 0; $i < $wordSize; $i++) {
            if ($words[$i]->id == $wordAnswerIds[$i]->word_id) {
                $words[$i]->answer = $wordAnswerIds[$i]->word_answer_id;
            }
        }

        //user's mark
        $mark = $lesson->result;

        return view('user.result_Lesson', compact('words', 'mark', 'wordSize'));
    }
}
