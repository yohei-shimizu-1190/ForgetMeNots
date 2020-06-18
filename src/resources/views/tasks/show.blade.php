@extends('layouts.default')

@section('title', $task->title)

@section('content')
<h1>
  <a href="{{ url('/') }}", class="header-menu">back</a>
  {{ $task->title}}
</h1>
    <p>{!! nl2br(e($task->body)) !!}</p>

@endsection
