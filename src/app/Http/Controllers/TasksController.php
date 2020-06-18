<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

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
        return view('tasks.show')->with('task', $task);
    }
}
