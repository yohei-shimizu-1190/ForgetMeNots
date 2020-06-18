@extends('layouts.default')

@section('title', '新しいタスク')

@section('content')
<h1>
  <a href="{{ url('/') }}" class="header-menu">back</a>
  新しいタスク
</h1>
<form method="post" action="{{ url('/tasks') }}">
  {{ csrf_field() }}
  <p>
    <input type="text" name="title" placeholder="enter title" value="{{ old('title') }}">
    @if ($errors->has('title'))
    <span class="error">{{ $errors->first('title') }}</span>
    @endif
  </p>
  <p>
    <textarea name="body" placeholder="enter body">{{ old('body') }}</textarea>
    @if ($errors->has('body'))
    <span class="error">{{ $errors->first('body') }}</span>
    @endif

  </p>
  <p>
    <input type="submit" value="登録する">
  </p>
</form>

@endsection
