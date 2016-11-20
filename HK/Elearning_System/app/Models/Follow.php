<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    public function scopeFollowedBy($query, $fromUserId, $targetUserId) {
        return $query->where('following_id', $fromUserId)->where('follower_id', $targetUserId);
    }
}
