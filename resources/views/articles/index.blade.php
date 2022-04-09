@extends("layout")

@section('content')
    @foreach ($articles as $article)
        {{ $article->title }}
    @endforeach
@endsection
