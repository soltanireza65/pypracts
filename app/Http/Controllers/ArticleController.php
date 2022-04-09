<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller {
    public function index() {
        // $articles = Article::latest()->get();
        $articles = Article::paginate(5);
        return $articles;

        // return view('articles.index', [
        //     "articles" => $articles
        // ]);
    }
}
