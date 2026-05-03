import { Card, CodeText, Heading } from '@jankrajewskiit/ui';

import type { DocSnippet } from '../fixtures/developerFixtures';

const DocSnippetCard = (props: { snippet: DocSnippet }) => (
  <Card class="docsCard">
    <div class="docsCardHeader">
      <Heading as="p" level={4} variant="titleMd" class="docsCardTitle">
        {props.snippet.title}
      </Heading>
      <CodeText as="span" class="codeInline">
        {props.snippet.file}
      </CodeText>
    </div>
    <CodeText as="pre" variant="block" size="md" class="installBlock">
      {props.snippet.code}
    </CodeText>
  </Card>
);

export default DocSnippetCard;
