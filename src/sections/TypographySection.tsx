import { CodeText, Heading, LabelText, Text, useI18n } from '@jankrajewskiit/ui';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../components/ShowcaseSection';
const TypographySection = () => {
  const { ts, tx } = useI18n();
  const blockCodeTitle = () => ts('demo.text.typography.blockCode.sectionTitle');
  const blockCodeHelperText = () => ts('demo.text.typography.blockCode.helperText');

  return (
    <div>
      <ShowcaseSection
        title={ts('demo.showcase.typography.headingVariants.title')}
        subtitle={ts('demo.showcase.typography.headingVariants.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.typography.scale.title')}>
            <Heading variant="displayLg">{ts('demo.text.typography.scale.displayLarge')}</Heading>
            <Heading variant="displayMd">{ts('demo.text.typography.scale.displayMedium')}</Heading>
            <Heading level={1} variant="h1">
              {ts('demo.text.typography.scale.h1')}
            </Heading>
            <Heading level={2} variant="h2">
              {ts('demo.text.typography.scale.h2')}
            </Heading>
            <Heading level={3} variant="h3">
              {ts('demo.text.typography.scale.h3')}
            </Heading>
            <Heading level={4} variant="titleLg">
              {ts('demo.text.typography.scale.titleLarge')}
            </Heading>
            <Heading level={5} variant="titleMd">
              {ts('demo.text.typography.scale.titleMedium')}
            </Heading>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.typography.textVariants.title')}
        subtitle={ts('demo.showcase.typography.textVariants.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.typography.roles.title')}>
            <Text variant="bodyLg">{ts('demo.text.typography.roles.bodyLarge')}</Text>
            <Text variant="bodyMd">{ts('demo.text.typography.roles.bodyMedium')}</Text>
            <Text variant="bodySm">{ts('demo.text.typography.roles.bodySmall')}</Text>
            <Text variant="labelLg">{ts('demo.text.typography.roles.labelLarge')}</Text>
            <Text variant="labelMd">{ts('demo.text.typography.roles.labelMedium')}</Text>
            <Text variant="caption">{ts('demo.text.typography.roles.caption')}</Text>
            <Text variant="overline">{ts('demo.text.typography.roles.overline')}</Text>
          </PreviewGroup>
          <PreviewGroup title={ts('demo.text.typography.tones.title')}>
            <Text tone="default">{ts('demo.text.typography.tones.default')}</Text>
            <Text tone="secondary">{ts('demo.text.typography.tones.secondary')}</Text>
            <Text tone="muted">{ts('demo.text.typography.tones.muted')}</Text>
            <Text tone="tertiary">{ts('demo.text.typography.tones.tertiary')}</Text>
            <Text tone="primary">{ts('demo.text.typography.tones.primary')}</Text>
          </PreviewGroup>
          <PreviewGroup title="LabelText">
            <LabelText label={ts('demo.text.typography.roles.labelLarge')} />
            <LabelText
              label={ts('demo.text.typography.scale.titleMedium')}
              description={ts('demo.text.typography.tones.muted')}
            />
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.typography.codeTextVariants.title')}
        subtitle={ts('demo.showcase.typography.codeTextVariants.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.typography.inlineCode.title')}>
            <Text>
              {tx('demo.text.typography.inlineCode.message', {
                textCode: () => (
                  <CodeText as="span" class="codeInline">
                    &lt;Text variant="bodySm" /&gt;
                  </CodeText>
                ),
                headingCode: () => (
                  <CodeText as="span" class="codeInline">
                    &lt;Heading variant="h2" /&gt;
                  </CodeText>
                ),
              })}
            </Text>
          </PreviewGroup>
          <PreviewGroup title={ts('demo.text.typography.blockCode.title')}>
            <CodeText as="pre" variant="block" size="md" class="installBlock">
              {`import { Heading, Text, CodeText } from '@jankrajewskiit/ui';

<Heading variant="h2">${blockCodeTitle()}</Heading>
<Text variant="bodySm" tone="muted">${blockCodeHelperText()}</Text>`}
            </CodeText>
          </PreviewGroup>
        </PreviewPanel>
        <ShowcaseMeta>{ts('demo.text.typography.meta')}</ShowcaseMeta>
      </ShowcaseSection>
    </div>
  );
};

export default TypographySection;
