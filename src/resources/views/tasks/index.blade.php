@extends('layouts.default')

@section('title', 'ForgetMeNots')

@section('content')
<h1>
  <a href="{{ url('/posts/create') }}", class="header-menu">New Task</a>
  ForgetMeNots
</h1>

    <ul>
      @forelse ($tasks as $task)
        <!-- <li><a href="/tasks/{{ $task->id }}">{{$task->title}}</a></li> -->
        <!-- <li><a href="{{ url('/tasks', $task->id) }}">{{$task->title}}</a></li> -->
        <li><a href="{{ action('TasksController@show', $task) }}">{{$task->title}}</a></li>
      @empty
        <li>まだやることはありません</li>
      @endforelse

    </ul>

@endsection
