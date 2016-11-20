<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UpdateUserRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|between:3,20',
            'email' => 'unique:users,email,' . $this->user,
            'avatar'=>'image|mimes:jpeg,jpg,bmp,png,gif|max:2048',
        ];
    }
}
