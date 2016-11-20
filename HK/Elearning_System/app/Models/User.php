<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    /**
     * Get the list of users who follow the current user.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function followers()
    {
        return $this->belongsToMany(User::class, 'follows', 'following_id', 'follower_id');
    }

    /**
     * Get the list of users that the current user follows.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function followings()
    {
        return $this->belongsToMany(User::class, 'follows', 'follower_id', 'following_id');
    }

    /**
     * Determine if current user follows another user.
     * @param User $otherUser
     * @return mixed
     */
    public function isFollowedBy(User $otherUser)
    {
        return $otherUser->followings()->where('following_id', $this->id)->first();
    }

    /**
     * Determine if the given user is the same as the current one.
     * @return bool
     */
    public function isCurrent()
    {
        return auth()->id() ? ($this->id == auth()->id()) : false;
    }

    /**
     * Relationship between user and activity.
     * @return mixed
     */
    public function activity()
    {
        return $this->hasMany(Activity::class)->with(['user', 'lesson']);
    }

    /**
     * Relationship between user and lesson.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
