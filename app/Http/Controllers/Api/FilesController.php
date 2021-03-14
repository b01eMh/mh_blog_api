<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\FileRequest;
use App\Http\Controllers\Controller;

class FilesController extends Controller
{
    public function store(FileRequest $request)
    {
        $post = Post::findOrFail($request->post_id);
        $this->authorize('upload', $post);
        $image = $request->file('image');
        $fileName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('/public/image', $fileName);
        $post->image = $fileName;
        $post->save();

        $comments = $post->comments;
        return $post;
    }
}
