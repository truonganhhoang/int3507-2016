<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = ['category_id', 'user_id', 'result', 'is_completed'];

    /**
     * Relationship between lesson and category
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Relationship between lesson and word.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lessonWords()
    {
        return $this->hasMany(LessonWord::class);
    }

    /**
     * Relationship between lesson and activity
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * Relationship between lesson and word.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function words()
    {
        return $this->belongsToMany(Word::class, 'lesson_words', 'lesson_id', 'word_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function wordAnswers()
    {
        return $this->belongsToMany(WordAnswer::class, 'lesson_words', 'lesson_id', 'word_answer_id');
    }

    /**
     * Relationship between lesson and user.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
