<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
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
            //
            'title' => 'required',
            'body' => 'required'

        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'タイトルを入力してください',
            'body.required' => '説明を入力してください',
        ];
    }
}
