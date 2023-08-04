<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): ResponseFactory|Response
    {
        return inertia('Dashboard');
    }
}
