import { Grid, QuestionCard } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const QuestionCardDemo = () => {
  const [voted, setVoted] = createSignal(false);
  const [starred, setStarred] = createSignal(false);

  return (
    <Grid min={320} gap={4}>
      <QuestionCard
        category="System design"
        level="Senior"
        question="How would you design a rate limiter?"
        difficulty={4}
        time="15 min"
        tags={['api', 'scale']}
        answer="Use a token bucket per client, kept in a shared cache, and return 429 with a Retry-After header."
        votes={voted() ? 13 : 12}
        voted={voted()}
        onVote={() => setVoted(!voted())}
        starred={starred()}
        onStar={() => setStarred(!starred())}
      />
      <QuestionCard
        category="JavaScript"
        categoryTone="info"
        level="Mid"
        question="Explain event delegation."
        difficulty={2}
        time="5 min"
        tags={['dom', 'events']}
        answer="Attach one listener to a common ancestor and inspect event.target, instead of one listener per child."
        defaultExpanded
      />
    </Grid>
  );
};
