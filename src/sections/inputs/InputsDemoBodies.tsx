import {
  ActionRow,
  addToast,
  AffixButton,
  AffixInput,
  Autocomplete,
  Badge,
  Button,
  CalendarEventButton,
  CalendarHeader,
  Checkbox,
  CheckboxIndicator,
  ChipOptionSwitcher,
  CodeText,
  ColorPicker,
  CopyButton,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DropdownButton,
  DropdownMenu,
  DropdownOption,
  FileDropZone,
  FormField,
  FormGrid,
  FormLayout,
  HierarchicalOptionNavigator,
  IconButton,
  IconOptionSwitcher,
  ImportSourcesDialog,
  InlineEditableText,
  Input,
  LocaleSwitcher,
  MultiSelect,
  NumberInput,
  OptionMenuChip,
  OtpInput,
  PasswordInput,
  RadioGroup,
  RangeSlider,
  Rating,
  RichTextEditor,
  RoundIconButton,
  SearchInput,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TagInput,
  Text,
  TextArea,
  ThemeToggle,
  TimePicker,
  useI18n,
} from '@jankrajewskiit/ui';
import { IoAdd, IoClose, IoDocument, IoDownload, IoEllipsisHorizontal, IoPencil, IoTrash } from 'solid-icons/io';
import { Show } from 'solid-js';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../../components/ShowcaseSection';
import type { DemoRoleValue } from '../../fixtures/inputsFixtures';
import type { SectionId } from '../../nav/demoNavConfig';
import { useInputsDemo } from './InputsDemoContext';

interface InputsDemoBodiesProps {
  sectionId: () => SectionId;
}

const InputsDemoBodies = (props: InputsDemoBodiesProps) => {
  const model = useInputsDemo();

  const { tx, ts } = useI18n();
  return (
    <div>
      <Show when={props.sectionId() === 'inputs-buttons'}>
        {(() => {
          const { loading, simulateLoad } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.buttonVariants.title')}
                subtitle={ts('demo.showcase.inputs.buttonVariants.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.inputs.buttonVariants.variants.title')}>
                    <div class="row">
                      <Button variant="primary">{ts('demo.text.inputs.buttons.primary')}</Button>
                      <Button variant="danger">{ts('demo.text.inputs.buttons.danger')}</Button>
                      <Button variant="ghost">{ts('demo.text.inputs.buttons.ghost')}</Button>
                      <Button variant="dashed">{ts('demo.text.inputs.buttons.dashed')}</Button>
                      <Button variant="outline">{ts('demo.text.inputs.buttons.outline')}</Button>
                      <Button variant="subtle">{ts('demo.text.inputs.buttons.subtle')}</Button>
                    </div>
                  </PreviewGroup>
                  <PreviewGroup title={ts('demo.text.inputs.buttonVariants.states.title')}>
                    <div class="row">
                      <Button variant="primary" disabled>
                        {ts('demo.text.inputs.buttons.disabled')}
                      </Button>
                      <Button variant="primary" loading={loading()} onClick={simulateLoad}>
                        {loading() ? ts('demo.text.inputs.buttons.saving') : ts('demo.text.inputs.buttons.clickToLoad')}
                      </Button>
                    </div>
                  </PreviewGroup>
                  <PreviewGroup title={ts('demo.text.inputs.buttonVariants.sizes.title')}>
                    <div class="row">
                      <Button variant="primary" size="sm">
                        {ts('demo.text.inputs.buttons.small')}
                      </Button>
                      <Button variant="primary" size="md">
                        {ts('demo.text.inputs.buttons.medium')}
                      </Button>
                      <Button variant="primary" size="lg">
                        {ts('demo.text.inputs.buttons.large')}
                      </Button>
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.affixButton.title')}
                subtitle={ts('demo.showcase.inputs.affixButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.inputs.affixButton.examples.title')}>
                    <div class="row">
                      <AffixButton
                        variant="ghost"
                        text={ts('demo.text.inputs.affixButton.documents')}
                        prefix={<IoDocument />}
                        suffix={
                          <Badge content={12}>
                            <span class="affixButtonBadgeSpacer" />
                          </Badge>
                        }
                      />
                      <AffixButton
                        variant="primary"
                        text={ts('demo.text.inputs.affixButton.exportReport')}
                        prefix={<IoDownload />}
                        suffix={<IoEllipsisHorizontal />}
                      />
                      <AffixButton
                        variant="dashed"
                        text={ts('demo.text.inputs.affixButton.createTag')}
                        prefix={<IoAdd />}
                        suffix={<IoClose />}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  <CodeText as="span" class="codeInline">
                    AffixButton
                  </CodeText>{' '}
                  {ts('demo.text.inputs.affixButton.meta')}
                </ShowcaseMeta>
              </ShowcaseSection>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.iconButton.title')}
                subtitle={ts('demo.showcase.inputs.iconButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <IconButton icon={<IoPencil />} label={ts('demo.text.inputs.iconButton.edit')} />
                      <IconButton icon={<IoTrash />} label={ts('demo.text.inputs.iconButton.delete')} />
                      <IconButton icon={<IoAdd />} label={ts('demo.text.inputs.iconButton.add')} size="sm" />
                      <IconButton icon={<IoDownload />} label={ts('demo.text.inputs.iconButton.download')} size="md" />
                      <IconButton icon={<IoClose />} label={ts('demo.text.inputs.iconButton.close')} disabled />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.roundIconButton.title')}
                subtitle={ts('demo.showcase.inputs.roundIconButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <RoundIconButton
                        icon={<IoAdd />}
                        label={ts('demo.text.inputs.roundIconButton.create')}
                        size="sm"
                      />
                      <RoundIconButton
                        icon={<IoDownload />}
                        label={ts('demo.text.inputs.roundIconButton.export')}
                        size="md"
                        elevation="popover"
                      />
                      <RoundIconButton
                        icon={<IoPencil />}
                        label={ts('demo.text.inputs.roundIconButton.edit')}
                        size="lg"
                        elevation="glow"
                      />
                      <RoundIconButton
                        icon={<IoClose />}
                        label={ts('demo.text.inputs.roundIconButton.close')}
                        disabled
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.copyButton.title')}
                subtitle={ts('demo.showcase.inputs.copyButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <CopyButton text="npm install @jankrajewskiit/ui" />
                      <CopyButton text="Hello World" variant="outline" />
                      <CopyButton text={ts('demo.text.inputs.copyButton.smallCopyText')} size="sm" />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.localeSwitcher.title')}
                subtitle={ts('demo.showcase.inputs.localeSwitcher.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup
                    title={ts('demo.text.inputs.localeSwitcher.surfaceVariant.title')}
                    subtitle={ts('demo.text.inputs.localeSwitcher.surfaceVariant.subtitle')}
                  >
                    <div class="row">
                      <LocaleSwitcher variant="primary" />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.themeToggle.title')}
                subtitle={ts('demo.showcase.inputs.themeToggle.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <ThemeToggle variant="light" />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {tx('demo.text.inputs.themeToggle.metaWithHook', {
                    useTheme: () => (
                      <CodeText as="span" class="codeInline">
                        useTheme()
                      </CodeText>
                    ),
                  })}
                </ShowcaseMeta>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-dropdowns'}>
        {(() => {
          const {
            menuOption,
            setMenuOption,
            optionMenuItems,
            selected,
            handleSelectChange,
            frameworks,
            setFrameworks,
            autoValues,
            setAutoValues,
            FRAMEWORK_OPTIONS,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.dropdownButton.title')}
                subtitle={ts('demo.showcase.inputs.dropdownButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <DropdownButton label={ts('demo.text.inputs.dropdownButton.actions')} variant="primary">
                        <DropdownOption
                          role="menuitem"
                          label={ts('demo.text.inputs.dropdownButton.edit')}
                          onClick={() => {}}
                        />
                        <DropdownOption
                          role="menuitem"
                          label={ts('demo.text.inputs.dropdownButton.duplicate')}
                          onClick={() => {}}
                        />
                        <DropdownOption
                          role="menuitem"
                          label={ts('demo.text.inputs.dropdownButton.archive')}
                          onClick={() => {}}
                        />
                      </DropdownButton>
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.dropdownMenu.title')}
                subtitle={ts('demo.showcase.inputs.dropdownMenu.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <DropdownMenu
                        trigger={<IoEllipsisHorizontal />}
                        label={ts('demo.text.inputs.dropdownMenu.moreOptions')}
                      >
                        <DropdownOption
                          role="menuitem"
                          prefix={<IoPencil />}
                          label={ts('demo.text.inputs.dropdownMenu.settings')}
                          onClick={() => {}}
                        />
                        <DropdownOption
                          role="menuitem"
                          prefix={<IoDownload />}
                          label={ts('demo.text.inputs.dropdownMenu.export')}
                          onClick={() => {}}
                        />
                        <DropdownOption
                          role="menuitem"
                          prefix={<IoTrash />}
                          tone="error"
                          label={ts('demo.text.inputs.dropdownMenu.delete')}
                          onClick={() => {}}
                        />
                      </DropdownMenu>
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.optionMenuChip.title')}
                subtitle={ts('demo.showcase.inputs.optionMenuChip.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <OptionMenuChip
                      value={menuOption()}
                      options={optionMenuItems()}
                      menuLabel={ts('demo.text.inputs.optionMenuChip.menuLabel')}
                      onChange={setMenuOption}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.select.title')}
                subtitle={ts('demo.showcase.inputs.select.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.select.chooseOption')}>
                      {(fieldProps) => (
                        <Select
                          {...fieldProps}
                          value={selected()}
                          onChange={handleSelectChange}
                          options={[
                            { value: '', label: ts('demo.text.inputs.select.selectPlaceholder') },
                            { value: 'a', label: ts('demo.text.inputs.select.optionA') },
                            { value: 'b', label: ts('demo.text.inputs.select.optionB') },
                            { value: 'c', label: ts('demo.text.inputs.select.optionC') },
                          ]}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.multiSelect.title')}
                subtitle={ts('demo.showcase.inputs.multiSelect.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.multiSelect.frameworks')}>
                      {(fieldProps) => (
                        <MultiSelect
                          {...fieldProps}
                          value={frameworks()}
                          options={FRAMEWORK_OPTIONS}
                          onChange={setFrameworks}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.multiSelect.selected')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {frameworks().join(', ') || ts('demo.text.inputs.common.none')}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.autocomplete.title')}
                subtitle={ts('demo.showcase.inputs.autocomplete.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.autocomplete.technologies')}>
                      {(fieldProps) => (
                        <Autocomplete
                          {...fieldProps}
                          values={autoValues()}
                          options={[
                            'TypeScript',
                            'JavaScript',
                            'SolidJS',
                            'React',
                            'Vue',
                            'Svelte',
                            'Vite',
                            'Tailwind',
                          ]}
                          onChange={setAutoValues}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-fields'}>
        {(() => {
          const {
            text,
            setText,
            editableTitle,
            setEditableTitle,
            richText,
            setRichText,
            search,
            setSearch,
            affixValue,
            setAffixValue,
            quantity,
            setQuantity,
            otp,
            setOtp,
            tags,
            setTags,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.input.title')}
                subtitle={ts('demo.showcase.inputs.input.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <form class="inputFieldStack" onSubmit={(e) => e.preventDefault()}>
                      <FormField label={ts('demo.text.inputs.fields.textInput')}>
                        {(fieldProps) => (
                          <Input
                            {...fieldProps}
                            type="text"
                            placeholder={ts('demo.text.inputs.fields.enterText')}
                            value={text()}
                            onInput={(e) => setText(e.currentTarget.value)}
                          />
                        )}
                      </FormField>
                      <FormField label={ts('demo.text.inputs.fields.disabledInput')}>
                        {(fieldProps) => (
                          <Input
                            {...fieldProps}
                            type="text"
                            value={ts('demo.text.inputs.fields.disabledValue')}
                            disabled
                          />
                        )}
                      </FormField>
                    </form>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.inputSizes.title')}
                subtitle={ts('demo.showcase.inputs.inputSizes.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="inputSizesStack">
                      <FormField label={ts('demo.text.inputs.inputSizes.small')}>
                        {(fieldProps) => (
                          <Input {...fieldProps} size="sm" placeholder={ts('demo.text.inputs.inputSizes.smallInput')} />
                        )}
                      </FormField>
                      <FormField label={ts('demo.text.inputs.inputSizes.medium')}>
                        {(fieldProps) => (
                          <Input
                            {...fieldProps}
                            size="md"
                            placeholder={ts('demo.text.inputs.inputSizes.mediumInput')}
                          />
                        )}
                      </FormField>
                      <FormField label={ts('demo.text.inputs.inputSizes.large')}>
                        {(fieldProps) => (
                          <Input {...fieldProps} size="lg" placeholder={ts('demo.text.inputs.inputSizes.largeInput')} />
                        )}
                      </FormField>
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.affixInput.title')}
                subtitle={ts('demo.showcase.inputs.affixInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.affixInput.emailWithActions')}>
                      {(fieldProps) => (
                        <AffixInput
                          {...fieldProps}
                          value={affixValue()}
                          onInput={(e) => setAffixValue(e.currentTarget.value)}
                          placeholder={ts('demo.text.inputs.affixInput.emailPlaceholder')}
                          prefix={<IoDocument />}
                          suffix={
                            <IconButton
                              icon={<IoClose />}
                              label={ts('demo.text.inputs.affixInput.clearValue')}
                              onClick={() => setAffixValue('')}
                              size="sm"
                              variant="subtle"
                            />
                          }
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.affixInput.searchStyle')}>
                      {(fieldProps) => (
                        <AffixInput
                          {...fieldProps}
                          size="sm"
                          placeholder={ts('demo.text.inputs.affixInput.filterByKeyword')}
                          prefix={<IoAdd />}
                          suffix={<IoEllipsisHorizontal />}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.textArea.title')}
                subtitle={ts('demo.showcase.inputs.textArea.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.textArea.description')}>
                      {(fieldProps) => (
                        <TextArea
                          {...fieldProps}
                          placeholder={ts('demo.text.inputs.textArea.enterLongerDescription')}
                          rows={4}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.numberInput.title')}
                subtitle={ts('demo.showcase.inputs.numberInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <NumberInput value={quantity()} onChange={setQuantity} min={0} max={100} size="md" />
                    <NumberInput value={1} onChange={() => {}} disabled size="sm" />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.searchInput.title')}
                subtitle={ts('demo.showcase.inputs.searchInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <SearchInput value={search()} onInput={setSearch} />
                    <SearchInput value="" onInput={() => {}} disabled />
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.searchInput.searchValue')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {search()}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.passwordInput.title')}
                subtitle={ts('demo.showcase.inputs.passwordInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.passwordInput.password')}>
                      {(fieldProps) => (
                        <PasswordInput
                          {...fieldProps}
                          placeholder={ts('demo.text.inputs.passwordInput.enterPassword')}
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.passwordInput.disabled')}>
                      {(fieldProps) => <PasswordInput {...fieldProps} value="secret123" disabled />}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.tagInput.title')}
                subtitle={ts('demo.showcase.inputs.tagInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.tagInput.tags')}>
                      {(fieldProps) => <TagInput {...fieldProps} value={tags()} onChange={setTags} />}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.otpInput.title')}
                subtitle={ts('demo.showcase.inputs.otpInput.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <OtpInput value={otp()} onChange={setOtp} length={6} />
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.otpInput.enteredValue')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {otp()}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.inlineEditableText.title')}
                subtitle={ts('demo.showcase.inputs.inlineEditableText.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <InlineEditableText
                      value={editableTitle()}
                      onChange={setEditableTitle}
                      placeholder={ts('demo.text.inputs.inlineEditableText.setTitle')}
                    />
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.inlineEditableText.currentValue')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {editableTitle()}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.richTextEditor.title')}
                subtitle={ts('demo.showcase.inputs.richTextEditor.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <RichTextEditor value={richText()} onChange={setRichText} />
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.richTextEditor.htmlLength')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {String(richText().length)}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-switchers'}>
        {(() => {
          const {
            notifications,
            setNotifications,
            newsletter,
            setNewsletter,
            termsAccepted,
            setTermsAccepted,
            marketingEmails,
            setMarketingEmails,
            focusMode,
            setFocusMode,
            role,
            setRole,
            viewMode,
            setViewMode,
            segment,
            setSegment,
            billingCycle,
            setBillingCycle,
            iconCategory,
            setIconCategory,
            chipCategory,
            setChipCategory,
            hierarchicalMainCategory,
            setHierarchicalMainCategory,
            hierarchicalChildCategory,
            setHierarchicalChildCategory,
            chipSelectorItems,
            iconSelectorItems,
            categoryNavigatorItems,
          } = model;
          return (
            <>
              <ShowcaseSection title="CheckboxIndicator" subtitle="Low-level visual indicator used by Checkbox">
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <CheckboxIndicator checked={false} />
                      <CheckboxIndicator checked />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.checkbox.title')}
                subtitle={ts('demo.showcase.inputs.checkbox.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <Checkbox
                      checked={newsletter()}
                      onChange={(e) => setNewsletter(e.currentTarget.checked)}
                      label={ts('demo.text.inputs.checkbox.subscribeNewsletter')}
                      description={ts('demo.text.inputs.checkbox.monthlyUpdates')}
                    />
                    <Checkbox
                      checked={termsAccepted()}
                      onChange={(e) => setTermsAccepted(e.currentTarget.checked)}
                      label={ts('demo.text.inputs.checkbox.acceptTerms')}
                    />
                    <Checkbox
                      checked={marketingEmails()}
                      onChange={(e) => setMarketingEmails(e.currentTarget.checked)}
                      label={ts('demo.text.inputs.checkbox.productNews')}
                      description={ts('demo.text.inputs.checkbox.unsubscribeAnytime')}
                    />
                    <Checkbox
                      checked={false}
                      onChange={() => {}}
                      label={ts('demo.text.inputs.checkbox.uncheckedDefault')}
                    />
                    <Checkbox
                      checked
                      disabled
                      onChange={() => {}}
                      label={ts('demo.text.inputs.checkbox.checkedDisabled')}
                    />
                    <Checkbox
                      checked={false}
                      disabled
                      onChange={() => {}}
                      label={ts('demo.text.inputs.checkbox.uncheckedDisabled')}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.radioGroup.title')}
                subtitle={ts('demo.showcase.inputs.radioGroup.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <RadioGroup<DemoRoleValue>
                      name="demo-role"
                      value={role()}
                      onChange={setRole}
                      direction="column"
                      options={[
                        {
                          value: 'admin',
                          label: ts('demo.text.inputs.radio.admin'),
                          description: ts('demo.text.inputs.radio.fullAccess'),
                        },
                        {
                          value: 'editor',
                          label: ts('demo.text.inputs.radio.editor'),
                          description: ts('demo.text.inputs.radio.canEdit'),
                        },
                        {
                          value: 'viewer',
                          label: ts('demo.text.inputs.radio.viewer'),
                          description: ts('demo.text.inputs.radio.readOnly'),
                        },
                      ]}
                    />
                    <RadioGroup
                      name="demo-horizontal"
                      value={viewMode()}
                      onChange={setViewMode}
                      direction="row"
                      options={[
                        { value: 'list', label: ts('demo.text.inputs.segmented.list') },
                        { value: 'grid', label: ts('demo.text.inputs.segmented.grid') },
                        { value: 'board', label: ts('demo.text.inputs.segmented.board') },
                      ]}
                    />
                    <RadioGroup
                      name="demo-disabled"
                      value={billingCycle()}
                      onChange={setBillingCycle}
                      direction="column"
                      options={[
                        { value: 'monthly', label: ts('demo.text.inputs.radio.monthlyBilling') },
                        {
                          value: 'yearly',
                          label: ts('demo.text.inputs.radio.yearlyBilling'),
                          description: ts('demo.text.inputs.radio.save20'),
                        },
                      ]}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.switch.title')}
                subtitle={ts('demo.showcase.inputs.switch.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <Switch
                      checked={notifications()}
                      onChange={setNotifications}
                      label={ts('demo.text.inputs.switch.enablePush')}
                      description={ts('demo.text.inputs.switch.receiveAlerts')}
                      aria-label={ts('demo.text.inputs.switch.enablePush')}
                    />
                    <Switch
                      checked={focusMode()}
                      onChange={setFocusMode}
                      label={ts('demo.text.inputs.switch.focusMode')}
                      description={ts('demo.text.inputs.switch.hideSidebar')}
                      aria-label={ts('demo.text.inputs.switch.focusMode')}
                    />
                    <Switch
                      checked={true}
                      onChange={() => {}}
                      label={ts('demo.text.inputs.switch.onControlled')}
                      aria-label={ts('demo.text.inputs.switch.on')}
                    />
                    <Switch
                      checked={false}
                      onChange={() => {}}
                      label={ts('demo.text.inputs.switch.off')}
                      aria-label={ts('demo.text.inputs.switch.off')}
                    />
                    <Switch
                      checked
                      disabled
                      onChange={() => {}}
                      label={ts('demo.text.inputs.switch.disabledOn')}
                      aria-label={ts('demo.text.inputs.switch.disabledOn')}
                    />
                    <Switch
                      checked={false}
                      disabled
                      onChange={() => {}}
                      label={ts('demo.text.inputs.switch.disabledOff')}
                      aria-label={ts('demo.text.inputs.switch.disabledOff')}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.segmentedControl.title')}
                subtitle={ts('demo.showcase.inputs.segmentedControl.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <SegmentedControl
                      value={segment()}
                      onChange={setSegment}
                      options={[
                        { value: 'list', label: ts('demo.text.inputs.segmented.list') },
                        { value: 'grid', label: ts('demo.text.inputs.segmented.grid') },
                        { value: 'board', label: ts('demo.text.inputs.segmented.board') },
                      ]}
                    />
                    <SegmentedControl
                      value={billingCycle()}
                      onChange={setBillingCycle}
                      size="sm"
                      options={[
                        { value: 'monthly', label: ts('demo.text.inputs.segmented.monthly') },
                        { value: 'yearly', label: ts('demo.text.inputs.segmented.yearly') },
                      ]}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.iconOptionSwitcher.title')}
                subtitle={ts('demo.showcase.inputs.iconOptionSwitcher.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="recronDemoWide recronDemoSurface">
                      <IconOptionSwitcher
                        aria-label={ts('demo.text.inputs.iconOptionSwitcher.ariaLabel')}
                        items={iconSelectorItems()}
                        selectedId={iconCategory()}
                        onSelect={setIconCategory}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.chipOptionSwitcher.title')}
                subtitle={ts('demo.showcase.inputs.chipOptionSwitcher.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="recronDemoWide recronDemoSurface">
                      <ChipOptionSwitcher
                        items={chipSelectorItems()}
                        selectedId={chipCategory()}
                        onSelect={setChipCategory}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.groupedOptionNavigator.title')}
                subtitle={ts('demo.showcase.inputs.groupedOptionNavigator.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="recronDemoWide recronDemoSurface">
                      <HierarchicalOptionNavigator
                        items={categoryNavigatorItems()}
                        selectedMainId={hierarchicalMainCategory()}
                        selectedChildId={hierarchicalChildCategory()}
                        align="center"
                        onMainSelect={(id) => {
                          setHierarchicalMainCategory(id);
                          const selectedItem = categoryNavigatorItems().find((item) => item.id === id);
                          const firstChild = selectedItem?.children[0]?.id ?? null;
                          setHierarchicalChildCategory(firstChild);
                        }}
                        onChildSelect={setHierarchicalChildCategory}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-pickers'}>
        {(() => {
          const {
            sliderEnhancedValue,
            setSliderEnhancedValue,
            sliderNoBubbleValue,
            setSliderNoBubbleValue,
            priceRange,
            setPriceRange,
            priceRangeNoBubbles,
            setPriceRangeNoBubbles,
            rating,
            setRating,
            color,
            setColor,
            PRESET_COLORS,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.slider.title')}
                subtitle={ts('demo.showcase.inputs.slider.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField
                      label={ts('demo.text.inputs.slider.satisfaction')}
                      description={`${ts('demo.text.inputs.slider.currentValue')}: ${String(sliderEnhancedValue())}`}
                    >
                      {(fieldProps) => (
                        <Slider
                          {...fieldProps}
                          value={sliderEnhancedValue()}
                          onChange={setSliderEnhancedValue}
                          min={0}
                          max={100}
                          step={5}
                          marks={[
                            { value: 0, label: '0' },
                            { value: 25, label: '25' },
                            { value: 50, label: '50' },
                            { value: 75, label: '75' },
                            { value: 100, label: '100' },
                          ]}
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.slider.withoutValueBubble')}>
                      {(fieldProps) => (
                        <Slider
                          {...fieldProps}
                          value={sliderNoBubbleValue()}
                          onChange={setSliderNoBubbleValue}
                          min={0}
                          max={100}
                          marks={[
                            { value: 0, label: ts('demo.text.inputs.slider.low') },
                            { value: 50, label: ts('demo.text.inputs.slider.mid') },
                            { value: 100, label: ts('demo.text.inputs.slider.high') },
                          ]}
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.common.disabled')}>
                      {(fieldProps) => (
                        <Slider {...fieldProps} value={70} onChange={() => {}} min={0} max={100} disabled />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.rangeSlider.title')}
                subtitle={ts('demo.showcase.inputs.rangeSlider.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField
                      label={ts('demo.text.inputs.rangeSlider.priceRange')}
                      description={`${String(priceRange().min)} - ${String(priceRange().max)}`}
                    >
                      {(fieldProps) => (
                        <RangeSlider
                          {...fieldProps}
                          value={priceRange()}
                          onChange={setPriceRange}
                          min={0}
                          max={100}
                          step={5}
                          marks={[
                            { value: 0, label: '0' },
                            { value: 25, label: '25' },
                            { value: 50, label: '50' },
                            { value: 75, label: '75' },
                            { value: 100, label: '100' },
                          ]}
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.rangeSlider.withoutValueBubbles')}>
                      {(fieldProps) => (
                        <RangeSlider
                          {...fieldProps}
                          value={priceRangeNoBubbles()}
                          onChange={setPriceRangeNoBubbles}
                          min={0}
                          max={100}
                          marks={[
                            { value: 0, label: ts('demo.text.inputs.slider.low') },
                            { value: 50, label: ts('demo.text.inputs.slider.mid') },
                            { value: 100, label: ts('demo.text.inputs.slider.high') },
                          ]}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.rating.title')}
                subtitle={ts('demo.showcase.inputs.rating.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <Rating value={rating()} onChange={setRating} />
                      <Rating value={3.5} />
                      <Rating value={4} size="sm" />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.colorPicker.title')}
                subtitle={ts('demo.showcase.inputs.colorPicker.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.colorPicker.brandColor')}>
                      {(fieldProps) => (
                        <ColorPicker {...fieldProps} colors={PRESET_COLORS} value={color()} onChange={setColor} />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.colorPicker.selectedColor')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {color()}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-datetime'}>
        {(() => {
          const {
            date,
            setDate,
            range,
            setRange,
            time,
            setTime,
            time15,
            setTime15,
            dateTime,
            setDateTime,
            calendarPreviewUrl,
            handleCalendarEventOpen,
            calendarEventPreview,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.datePicker.title')}
                subtitle={ts('demo.showcase.inputs.datePicker.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <CalendarHeader monthLabel="March 2026" onPrevious={() => {}} onNext={() => {}} />
                    <FormField label={ts('demo.text.inputs.dateTime.startDate')}>
                      {(fieldProps) => <DatePicker {...fieldProps} value={date()} onChange={setDate} />}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.common.disabled')}>
                      {(fieldProps) => <DatePicker {...fieldProps} value="" onChange={() => {}} disabled />}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.dateRangePicker.title')}
                subtitle={ts('demo.showcase.inputs.dateRangePicker.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <DateRangePicker value={range()} onChange={setRange} />
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.dateTime.range')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {range().start || ts('demo.text.inputs.dateTime.notSetDash')} →{' '}
                    {range().end || ts('demo.text.inputs.dateTime.notSetDash')}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.timePicker.title')}
                subtitle={ts('demo.showcase.inputs.timePicker.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.dateTime.meetingTime')}>
                      {(fieldProps) => <TimePicker {...fieldProps} value={time()} onChange={setTime} step={30} />}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.dateTime.preciseTime')}>
                      {(fieldProps) => <TimePicker {...fieldProps} value={time15()} onChange={setTime15} step={15} />}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.dateTimePicker.title')}
                subtitle={ts('demo.showcase.inputs.dateTimePicker.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.dateTime.publishAt')}>
                      {(fieldProps) => (
                        <DateTimePicker {...fieldProps} value={dateTime()} onChange={setDateTime} step={15} />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.dateTime.dateTime')}:{' '}
                  <CodeText as="span" class="codeInline">
                    {dateTime() || ts('demo.text.inputs.dateTime.notSet')}
                  </CodeText>
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title="CalendarEventButton"
                subtitle={ts('demo.recron.showcase.calendarEventButton.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="row">
                      <CalendarEventButton
                        event={calendarEventPreview()}
                        addLabel={ts('demo.recron.interview.calendar.addLabel')}
                        syncedLabel={ts('demo.recron.interview.calendar.syncedLabel')}
                        onOpen={handleCalendarEventOpen}
                      />
                    </div>
                    <Show when={calendarPreviewUrl()}>
                      {(url) => (
                        <Text as="p" variant="bodySm" tone="muted">
                          {url()}
                        </Text>
                      )}
                    </Show>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-other'}>
        {(() => {
          const {
            droppedFile,
            setDroppedFile,
            droppedFiles,
            setDroppedFiles,
            importOpen,
            setImportOpen,
            importBusy,
            closeImportDialog,
            handleImportSubmit,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.fileDropZone.title')}
                subtitle={ts('demo.showcase.inputs.fileDropZone.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="previewUploadFull">
                      <FileDropZone
                        label={ts('demo.text.inputs.fileDropZone.dropSingle')}
                        hint={ts('demo.text.inputs.fileDropZone.singleHint')}
                        accept=".pdf,.jpg,.png,image/*"
                        icon={<IoDocument size={28} />}
                        onFile={(f) => {
                          setDroppedFile(f.name);
                          addToast({
                            type: 'success',
                            message: `${ts('demo.text.inputs.fileDropZone.picked')}: ${f.name}`,
                          });
                        }}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
                {droppedFile() && (
                  <ShowcaseMeta>
                    {ts('demo.text.inputs.fileDropZone.selectedFile')}:{' '}
                    <CodeText as="span" class="codeInline">
                      {droppedFile()}
                    </CodeText>
                  </ShowcaseMeta>
                )}
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.fileDropZoneMultiple.title')}
                subtitle={ts('demo.showcase.inputs.fileDropZoneMultiple.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <div class="previewUploadFull">
                      <FileDropZone
                        accept="*"
                        multiple
                        label={ts('demo.text.inputs.fileDropZone.dropMultiple')}
                        hint={ts('demo.text.inputs.fileDropZone.multipleHint')}
                        icon={<IoDocument size={28} />}
                        onFiles={(files) => {
                          setDroppedFiles(files.map((file) => file.name));
                          addToast({
                            type: 'success',
                            message: ts('demo.text.inputs.fileDropZone.pickedCountMessage', { count: files.length }),
                          });
                        }}
                      />
                    </div>
                  </PreviewGroup>
                </PreviewPanel>
                {droppedFiles().length > 0 && (
                  <ShowcaseMeta>
                    {ts('demo.text.inputs.fileDropZone.selectedFiles')}:{' '}
                    <CodeText as="span" class="codeInline">
                      {droppedFiles().join(', ')}
                    </CodeText>
                  </ShowcaseMeta>
                )}
              </ShowcaseSection>

              <ShowcaseSection
                title="ImportSourcesDialog"
                subtitle={ts('demo.recron.showcase.importSourcesDialog.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <Button label={ts('demo.recron.hero.action.import')} onClick={() => setImportOpen(true)} />
                    <ImportSourcesDialog
                      open={importOpen()}
                      title={ts('demo.recron.hero.action.import')}
                      sources={[
                        {
                          value: 'portfolio-url',
                          label: ts('demo.recron.ai.import.source.url.label'),
                          kind: 'url',
                          inputLabel: ts('demo.recron.ai.import.source.url.inputLabel'),
                          inputPlaceholder: 'https://example.com/cv',
                          helperText: ts('demo.recron.ai.import.source.url.helperText'),
                        },
                        {
                          value: 'portfolio-file',
                          label: ts('demo.recron.ai.import.source.file.label'),
                          kind: 'file',
                          accept: '.pdf,.docx',
                          dropLabel: ts('demo.recron.ai.import.source.file.dropLabel'),
                          dropHint: ts('demo.recron.ai.import.source.file.dropHint'),
                          clearLabel: ts('demo.recron.ai.import.source.file.clearLabel'),
                        },
                      ]}
                      submitLabel={ts('demo.recron.ai.import.submitLabel')}
                      busy={importBusy()}
                      onClose={closeImportDialog}
                      onSubmit={handleImportSubmit}
                    />
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
      <Show when={props.sectionId() === 'inputs-form-layout'}>
        {(() => {
          const {
            tags,
            setTags,
            color,
            setColor,
            notifications,
            setNotifications,
            frameworks,
            setFrameworks,
            FRAMEWORK_OPTIONS,
            PRESET_COLORS,
            search,
            setSearch,
            selected,
            setSelected,
            range,
            setRange,
            dateTime,
            setDateTime,
            quantity,
            setQuantity,
          } = model;
          return (
            <>
              <ShowcaseSection
                title={ts('demo.showcase.inputs.formField.title')}
                subtitle={ts('demo.showcase.inputs.formField.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormField label={ts('demo.text.inputs.formField.fullName')}>
                      {(fieldProps) => (
                        <Input
                          {...fieldProps}
                          type="text"
                          placeholder={ts('demo.text.inputs.formField.fullNamePlaceholder')}
                        />
                      )}
                    </FormField>
                    <FormField label={ts('demo.text.inputs.formField.emailAddress')}>
                      {(fieldProps) => (
                        <Input
                          {...fieldProps}
                          type="email"
                          placeholder={ts('demo.text.inputs.formField.emailPlaceholder')}
                        />
                      )}
                    </FormField>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.formGrid.title')}
                subtitle={ts('demo.showcase.inputs.formGrid.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormLayout>
                      <FormGrid>
                        <FormField label={ts('demo.text.inputs.formGrid.firstName')}>
                          {(fieldProps) => (
                            <Input
                              {...fieldProps}
                              type="text"
                              placeholder={ts('demo.text.inputs.formGrid.firstNamePlaceholder')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.formGrid.lastName')}>
                          {(fieldProps) => (
                            <Input
                              {...fieldProps}
                              type="text"
                              placeholder={ts('demo.text.inputs.formGrid.lastNamePlaceholder')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.formGrid.email')}>
                          {(fieldProps) => (
                            <Input
                              {...fieldProps}
                              type="email"
                              placeholder={ts('demo.text.inputs.formGrid.emailPlaceholder')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.formGrid.role')}>
                          {(fieldProps) => (
                            <Select
                              {...fieldProps}
                              options={[
                                { value: '', label: ts('demo.text.inputs.formGrid.selectRole') },
                                { value: 'admin', label: ts('demo.text.inputs.radio.admin') },
                                { value: 'user', label: ts('demo.text.inputs.radio.user') },
                              ]}
                            />
                          )}
                        </FormField>
                      </FormGrid>
                    </FormLayout>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.formLayout.title')}
                subtitle={ts('demo.showcase.inputs.formLayout.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormLayout>
                      <FormField
                        label={ts('demo.text.inputs.formLayout.workspaceName')}
                        description={ts('demo.text.inputs.formLayout.workspaceNameDescription')}
                      >
                        {(fieldProps) => (
                          <Input
                            {...fieldProps}
                            type="text"
                            placeholder={ts('demo.text.inputs.formLayout.workspaceNamePlaceholder')}
                          />
                        )}
                      </FormField>
                      <FormField
                        label={ts('demo.text.inputs.formLayout.internalNotes')}
                        description={ts('demo.text.inputs.formLayout.internalNotesDescription')}
                      >
                        {(fieldProps) => (
                          <TextArea
                            {...fieldProps}
                            rows={3}
                            placeholder={ts('demo.text.inputs.formLayout.internalNotesPlaceholder')}
                          />
                        )}
                      </FormField>
                      <FormField
                        label={ts('demo.text.inputs.formLayout.searchScope')}
                        description={ts('demo.text.inputs.formLayout.searchScopeDescription')}
                      >
                        {(fieldProps) => (
                          <SearchInput
                            {...fieldProps}
                            value={search()}
                            onInput={setSearch}
                            placeholder={ts('demo.text.inputs.formLayout.searchRecords')}
                            debounce={300}
                          />
                        )}
                      </FormField>
                      <ActionRow align="start">
                        <Button variant="primary">{ts('demo.text.inputs.actions.saveDraft')}</Button>
                        <Button variant="ghost">{ts('demo.text.inputs.actions.discard')}</Button>
                      </ActionRow>
                    </FormLayout>
                  </PreviewGroup>
                </PreviewPanel>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.completeForm.title')}
                subtitle={ts('demo.showcase.inputs.completeForm.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <FormLayout>
                      <FormGrid>
                        <FormField label={ts('demo.text.inputs.completeForm.teamName')}>
                          {(fieldProps) => (
                            <Input
                              {...fieldProps}
                              type="text"
                              placeholder={ts('demo.text.inputs.completeForm.teamNamePlaceholder')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.contactEmail')}>
                          {(fieldProps) => (
                            <Input
                              {...fieldProps}
                              type="email"
                              placeholder={ts('demo.text.inputs.completeForm.contactEmailPlaceholder')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.passwordInput.password')}>
                          {(fieldProps) => (
                            <PasswordInput
                              {...fieldProps}
                              placeholder={ts('demo.text.inputs.completeForm.setWorkspacePassword')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.formGrid.role')}>
                          {(fieldProps) => (
                            <Select
                              {...fieldProps}
                              value={selected()}
                              onChange={(e) => setSelected(e.currentTarget.value)}
                              options={[
                                { value: '', label: ts('demo.text.inputs.formGrid.selectRole') },
                                { value: 'owner', label: ts('demo.text.inputs.completeForm.owner') },
                                { value: 'editor', label: ts('demo.text.inputs.radio.editor') },
                                { value: 'viewer', label: ts('demo.text.inputs.radio.viewer') },
                              ]}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.techStack')}>
                          {(fieldProps) => (
                            <MultiSelect
                              {...fieldProps}
                              options={FRAMEWORK_OPTIONS}
                              value={frameworks()}
                              onChange={setFrameworks}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.releaseWindow')}>
                          {(fieldProps) => <DateRangePicker {...fieldProps} value={range()} onChange={setRange} />}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.launchDateTime')}>
                          {(fieldProps) => (
                            <DateTimePicker {...fieldProps} value={dateTime()} onChange={setDateTime} step={15} />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.seats')}>
                          {(fieldProps) => (
                            <NumberInput {...fieldProps} value={quantity()} onChange={setQuantity} min={1} max={50} />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.tagInput.tags')}>
                          {(fieldProps) => (
                            <TagInput
                              {...fieldProps}
                              value={tags()}
                              onChange={setTags}
                              placeholder={ts('demo.text.inputs.completeForm.pressEnterTag')}
                            />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.accentColor')}>
                          {(fieldProps) => (
                            <ColorPicker {...fieldProps} colors={PRESET_COLORS} value={color()} onChange={setColor} />
                          )}
                        </FormField>
                        <FormField label={ts('demo.text.inputs.completeForm.summary')}>
                          {(fieldProps) => (
                            <TextArea
                              {...fieldProps}
                              placeholder={ts('demo.text.inputs.completeForm.summaryPlaceholder')}
                              rows={4}
                            />
                          )}
                        </FormField>
                      </FormGrid>
                      <FormField label={ts('demo.text.inputs.completeForm.notifications')}>
                        {(fieldProps) => (
                          <Switch
                            id={fieldProps.id}
                            aria-describedby={fieldProps['aria-describedby']}
                            aria-invalid={fieldProps['aria-invalid']}
                            checked={notifications()}
                            onChange={setNotifications}
                          />
                        )}
                      </FormField>
                      <ActionRow align="end">
                        <Button variant="ghost">{ts('demo.text.inputs.actions.cancel')}</Button>
                        <Button variant="outline">{ts('demo.text.inputs.actions.saveDraft')}</Button>
                        <Button variant="primary">{ts('demo.text.inputs.completeForm.createWorkspace')}</Button>
                      </ActionRow>
                    </FormLayout>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {tx('demo.text.inputs.completeForm.meta', {
                    formLayout: () => (
                      <CodeText as="span" class="codeInline">
                        FormLayout
                      </CodeText>
                    ),
                    formGrid: () => (
                      <CodeText as="span" class="codeInline">
                        FormGrid
                      </CodeText>
                    ),
                    formField: () => (
                      <CodeText as="span" class="codeInline">
                        FormField
                      </CodeText>
                    ),
                    actionRow: () => (
                      <CodeText as="span" class="codeInline">
                        ActionRow
                      </CodeText>
                    ),
                  })}
                </ShowcaseMeta>
              </ShowcaseSection>

              <ShowcaseSection
                title={ts('demo.showcase.inputs.actionRow.title')}
                subtitle={ts('demo.showcase.inputs.actionRow.subtitle')}
              >
                <PreviewPanel>
                  <PreviewGroup title={ts('demo.text.common.examples')}>
                    <ActionRow align="start">
                      <Button variant="primary">{ts('demo.text.inputs.actions.saveDraft')}</Button>
                      <Button variant="ghost">{ts('demo.text.inputs.actions.cancel')}</Button>
                    </ActionRow>
                    <ActionRow align="end">
                      <Button variant="dashed">{ts('demo.text.inputs.actions.export')}</Button>
                      <Button variant="primary">{ts('demo.text.inputs.actions.submit')}</Button>
                    </ActionRow>
                  </PreviewGroup>
                </PreviewPanel>
                <ShowcaseMeta>
                  {ts('demo.text.inputs.actionRow.use')}{' '}
                  <CodeText as="span" class="codeInline">
                    align
                  </CodeText>{' '}
                  {ts('demo.text.inputs.actionRow.meta')}
                </ShowcaseMeta>
              </ShowcaseSection>
            </>
          );
        })()}
      </Show>
    </div>
  );
};

export default InputsDemoBodies;
