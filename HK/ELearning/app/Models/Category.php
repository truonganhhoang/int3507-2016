<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Category extends Model
{
    protected $fillable = ['name'];

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function words()
    {
        return $this->hasMany(Word::class);
    }

    //total word in cate
    public function getCountWords(){
        return $this->words()->count();
    }
}
