<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class LessonCreateRequest extends Request
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
            'title' => 'required:lessons,title',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => trans('lesson.validate.title_required'),
        ];
    }
}
