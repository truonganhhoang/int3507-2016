<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CategoryCreateRequest extends Request
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
            'name' => 'required|unique:categories,name',
        ];
    }


    public function messages()
    {
        return [
            'name.required' => trans('category.validate.name_required'),
            'name.unique' => trans('category.validate.name_uniquired'),
        ];
    }
}
