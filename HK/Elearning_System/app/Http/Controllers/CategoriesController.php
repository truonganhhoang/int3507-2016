<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Word;
use App\Http\Requests;
use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\WordCreateRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;

class CategoriesController extends Controller
{
    /**
     * UserController constructor.
     */
    public function __construct()
    {
        $this->middleware('admin')->except('getAllCategories');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $categories = Category::paginate(config('settings.paging_number'));

        return view('admin.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryCreateRequest|Request $request
     * @return Response
     */
    public function store(CategoryCreateRequest $request)
    {
        $category = new Category;
        $category->name = $request->name;
        $category->save();

        return redirect()->action('CategoriesController@index')->with('success', trans('session.category_add_success'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $category = Category::find($id);

        return view('admin.category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CategoryCreateRequest|Request $request
     * @param  int $id
     * @return Response
     */
    public function update(CategoryCreateRequest $request, $id)
    {
        $allRequest = $request->all();
        $category = Category::find($id);
        $category->update($allRequest);

        return redirect()->action('CategoriesController@index')->with('success', trans('session.category_edit_success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $category = Category::find($id);
            $category->delete();

            return redirect()->action('CategoriesController@index')
                ->with('success', trans('session.category_delete_success'));
        } catch(Exception $e) {
            return redirect()->action('CategoriesController@index')
                ->with('errors', trans('session.category_delete_fail'));
        }
    }

    public function getAllWordsBelongsToCategory($id)
    {
        $category = Category::find($id)->name;
        $words = Category::find($id)->words()->paginate(config('settings.paging_number'));

        return view('admin.word.list', compact('category','words'));
    }

    public function getAddWordBelongsToCategory($id)
    {
        $category = Category::find($id);

        return view('admin.word.create', compact('category'));
    }

    public function addWordBelongsToCategory(WordCreateRequest $request, $id)
    {
        $category = Category::find($id);
        $word = $category->words()->create([
            'content' => $request->input('content'),
        ]);
        $result = $request->get('word');

        for ($i = 0; $i < sizeof($result); $i++) {
            if (isset($result[$i]['answer'])) {
                if (isset($result[$i+1]['correct']) && isset($result[$i+2]['correct'])) {
                    $word->wordAnswers()->create([
                        'correct' => config('settings.is_correct'),
                        'content' => $result[$i]['answer'],
                    ]);
                } else {
                    $word->wordAnswers()->create([
                        'correct' => config('settings.not_correct'),
                        'content' => $result[$i]['answer'],
                    ]);
                }
            }
        }

        return redirect()->action('CategoriesController@index')->with('success', trans('session.word_add_success'));
    }
    
    public function getAllCategories()
    {
        $categories = Category::paginate(config('settings.paging_number'));

        return view('user.categories', compact('categories'));

    }
}
