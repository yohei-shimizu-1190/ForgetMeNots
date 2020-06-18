<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\Http\Requests\TaskRequest;

class TasksController extends Controller
{
    public function index()
    {
        // $tasks = Task::orderBy('created_at', 'desk')->get();
        // ↓↑は同じ意味
        $tasks = Task::latest()->get();
        // dd($tasks->toArray());
        // return view('tasks.index',['tasks' => $tasks]);
        return view('tasks.index')->with('tasks', $tasks);
    }
    public function show(Task $task)
    {
        return view('tasks.show')->with('task', $task);
    }
    public function create()
    {
        return view('tasks.create');
    }
    public function store(TaskRequest $request)
    {
        $task = new Task();
        $task->title = $request->title;
        $task->body = $request->body;
        $task->save();
        return redirect('/');
    }
    public function edit(Task $task)
    {
        return view('tasks.edit')->with('task', $task);
    }
    public function update(TaskRequest $request, Task $task)
    {
        $task->title = $request->title;
        $task->body = $request->body;
        $task->save();
        return redirect('/');
    }
    public function destroy(Task $task)
    {
        $task->delete();
        return redirect('/');
    }
}
