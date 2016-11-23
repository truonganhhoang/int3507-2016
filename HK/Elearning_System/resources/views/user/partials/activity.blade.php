<ul class="list-group activity-list">

    @forelse ($activity as $event)
        <li class="list-group-item">
            <span class="pull-right text-muted small time-line">
             {{ $event->created_at->diffForHumans() }} <span class="fa fa-clock-o"></span>
            </span>
            @if ($event->words > 1)
                {{ trans('content.activity', ['name' => $user->name, 'words' => $event->words, 'countWords' => 'words', 'lesson' => $event->lesson->category->name]) }}
            @else
                {{ trans('content.activity', ['name' => $user->name, 'words' => $event->words, 'countWords' => 'word', 'lesson' => $event->lesson->category->name]) }}
            @endif
        </li>
    @empty
        <p>{{ trans('content.no_activity', ['name' => $user->name]) }}</p>
    @endforelse

    {!! $activity->render() !!}

</ul>
