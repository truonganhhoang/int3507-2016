<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\WordCreateRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\Category;
use App\Models\WordAnswer;
use App\Models\Word;

class WordsController extends Controller
{
    /**
     * WordsController constructor.
     */
    public function __construct()
    {
        $this->middleware('admin')->except('getAllWord');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $words = Word::with('category')->paginate(config('settings.paging_number'));
        $categories = Category::lists('name', 'id');

        return view('admin.word.index', compact('words', 'categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::lists('name', 'id');

        return view('admin.word.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param WordCreateRequest|Request $request
     * @return \Illuminate\Http\Response
     */

    public function store(WordCreateRequest $request)
    {
        Word::create([
            'content' => $request->content,
            'category_id' => $request->category_id,
        ]);

        return redirect()->action('WordsController@index')->with('success', trans('session.word_add_success'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $word = Word::find($id);
        $categories = Category::lists('name', 'id');
        $wordAnswers = $word->wordAnswers;

        return view('admin.word.edit', compact('word', 'categories', 'wordAnswers'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param WordCreateRequest|Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */

    public function update(WordCreateRequest $request, $id)
    {
        $allRequest = $request->all();
        $word = Word::find($id);
        $word->content = $request->input('content');
        $word->save();
        //get all word answer of word
        $wordAnswers = $word->wordAnswers;
        //delete old wordanswer to prepare update

        foreach ($wordAnswers as $word_answer) {
            WordAnswer::destroy($word_answer->id);
        }
        $result = $request->get('word');

        for ($i = 0; $i < sizeof($result); $i++) {
            if (isset($result[$i]['answer'])) {
                if (isset($result[$i+1]['correct']) && isset($result[$i+2]['correct'])) {
                    $word->wordAnswers()->create([
                        'correct' => config('settings.is_correct'),
                        'content' => $result[$i]['answer'],
                    ]);
                }
                else {
                    $word->wordAnswers()->create([
                        'correct' => config('settings.not_correct'),
                        'content' => $result[$i]['answer'],
                    ]);
                }
            }
        }

        return redirect()->action('WordsController@index')->with('success', trans('session.word_edit_success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $word = Word::find($id);
            $word->delete();

            return redirect()->action('WordsController@index')
                ->with('success', trans('session.word_delete_success'));
        } catch(Exception $e) {
            return redirect()->action('WordsController@index')
                ->with('errors', trans('session.word_delete_fail'));
        }
    }

    //show list word for user
    public function getAllWord()
    {
        $words = Word::with('category')->paginate(config('settings.paging_number'));

        return view('user.words', compact('words'));
    }

}
