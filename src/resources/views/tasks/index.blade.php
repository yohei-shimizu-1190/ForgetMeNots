@extends('layouts.default')

@section('title', 'ForgetMeNots')

@section('content')
<h1>
  <a href="{{ url('/tasks/create') }}", class="header-menu">New Task</a>
  ForgetMeNots
</h1>

    <ul>
      @forelse ($tasks as $task)
        <!-- <li><a href="/tasks/{{ $task->id }}">{{$task->title}}</a></li> -->
        <!-- <li><a href="{{ url('/tasks', $task->id) }}">{{$task->title}}</a></li> -->
        <li>
          <a href="{{ action('TasksController@show', $task) }}">{{$task->title}}</a>
          <a href="{{ action('TasksController@edit', $task) }}" class="edit">[Edit]</a>
          <a href="#" class="del" data-id="{{ $task->id }}">[x]</a>
          <form method="post" action="{{ url('/tasks', $task->id) }}" id="form_{{ $task->id }}">
            {{ csrf_field() }}
            {{ method_field('delete') }}
          </form>
        </li>
      @empty
        <li>アーティスト、曲、点数を入力してください</li>
      @endforelse

    </ul>
<script src="/js/main.js"></script>
@endsection
