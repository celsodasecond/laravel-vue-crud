<?php

use App\Models\ReviewAnswer;
use App\Models\ReviewQuestion;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_question_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\ReviewQuestion::class, 'review_question_id');
            $table->foreignIdFor(\App\Models\ReviewAnswer::class, 'review_answer_id');
            $table->text('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_question_answers');
    }
};
