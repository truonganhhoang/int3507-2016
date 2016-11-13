<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LessonWord extends Model
{
    protected $fillable = ['lesson_id', 'word_id', 'word_answer_id', 'is_answer_user'];

    public function word()
    {
        return $this->belongsTo(Word::class);
    }

    public function wordAnswer()
    {
        return $this->belongsTo(WordAnswer::class);
    }
}
