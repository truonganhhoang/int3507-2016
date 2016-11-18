<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    protected $fillable = ['content', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function wordAnswers()
    {
        return $this->hasMany(WordAnswer::class);
    }

    public function lessons()
    {
        return $this->belongsToMany(Lesson::class, 'lesson_words', 'word_id', 'lesson_id');
    }

    public function countAnswerWord()
    {
        return $this->wordAnswers()->count();
    }

    public function getCorrectAnswer()
    {
        $allAnswers = $this->wordAnswers()->get();

        foreach ($allAnswers as $answer) {
            if ($answer->correct) {
                return $answer;
            }
        }

        return null;
    }

    public function lessonWords()
    {
        return $this->hasMany(LessonWord::class);
    }

    public function __toString()
    {
        return $this->content . '-' . $this->category_id;
    }
}
