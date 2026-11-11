import { useI18n } from '@jankrajewskiit/i18n';
import {
  CopyField,
  InlineEdit,
  Input,
  NumberInput,
  OtpInput,
  PasswordInput,
  PhoneInput,
  RangeInput,
  RichTextEditor,
  TagInput,
  Textarea,
} from '@jankrajewskiit/ui';

import type { inputsEn } from '../../i18n/library/inputs';
import { CodeEditorDemo } from '../demos/inputs/CodeEditorDemo';
import { FileUploadDemo } from '../demos/inputs/FileUploadDemo';
import { MentionInputDemo } from '../demos/inputs/MentionInputDemo';
import { SearchSuggestionsDemo } from '../demos/inputs/SearchSuggestionsDemo';
import { SignaturePadDemo } from '../demos/inputs/SignaturePadDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './inputs.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const NICKNAME_LIMIT = 40;
const DESCRIPTION_LIMIT = 280;
const SALARY_LIMIT = 100_000;
const NOTES_MAX_HEIGHT_PX = 240;

export const inputSpecimens: readonly Specimen<SpecimenIdOf<typeof inputsEn>>[] = [
  {
    id: 'inputs-copy-field',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <CopyField
          label={ts('library.inputs.specimens.inputs-copy-field.inviteLink')}
          value="https://velvet.example/invite/8f3k2q"
        />
      );
    },
  },
  {
    id: 'inputs-input',
    span: 8,
    render: () => {
      const { ts } = useI18n();
      const validateEmail = (value: string) =>
        EMAIL_PATTERN.test(value) ? undefined : ts('library.inputs.specimens.inputs-input.invalidEmail');
      return (
        <div class={styles.grid}>
          <Input
            label={ts('library.inputs.specimens.inputs-input.fullName')}
            hint={ts('library.inputs.specimens.inputs-input.fullNameHint')}
            placeholder="Anna Kowalska"
          />
          <Input label={ts('library.inputs.specimens.inputs-input.company')} optional placeholder="Velvet Studio" />
          <Input
            label={ts('library.inputs.specimens.inputs-input.search')}
            iconLeft="search"
            placeholder={ts('library.inputs.specimens.inputs-input.searchPlaceholder')}
          />
          <Input
            label={ts('library.inputs.specimens.inputs-input.website')}
            prefix="https://"
            suffix=".com"
            placeholder="velvet"
          />
          <Input
            label={ts('library.inputs.specimens.inputs-input.email')}
            placeholder="you@velvet.example"
            validate={validateEmail}
            hint={ts('library.inputs.specimens.inputs-input.emailHint')}
          />
          <Input
            label={ts('library.inputs.specimens.inputs-input.nickname')}
            maxLength={NICKNAME_LIMIT}
            showCount
            hint={ts('library.inputs.specimens.inputs-input.nicknameHint')}
          />
          <Input size="sm" label={ts('library.inputs.specimens.inputs-input.small')} placeholder="sm" />
          <Input size="lg" label={ts('library.inputs.specimens.inputs-input.large')} placeholder="lg" />
          <Input
            label={ts('library.inputs.specimens.inputs-input.username')}
            error={ts('library.inputs.specimens.inputs-input.usernameTaken')}
            defaultValue="anna"
          />
          <Input
            label={ts('library.inputs.specimens.inputs-input.disabled')}
            disabled
            value={ts('library.inputs.specimens.inputs-input.lockedValue')}
          />
          <Input
            label={ts('library.inputs.specimens.inputs-input.readOnly')}
            readOnly
            value={ts('library.inputs.specimens.inputs-input.readOnlyValue')}
          />
        </div>
      );
    },
  },
  {
    id: 'inputs-textarea',
    span: 4,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <Textarea
            label={ts('library.inputs.specimens.inputs-textarea.description')}
            autoResize
            rows={3}
            maxRows={6}
            maxLength={DESCRIPTION_LIMIT}
            showCount
            placeholder={ts('library.inputs.specimens.inputs-textarea.descriptionPlaceholder')}
            hint={ts('library.inputs.specimens.inputs-textarea.descriptionHint')}
          />
          <Textarea
            label={ts('library.inputs.specimens.inputs-textarea.notes')}
            rows={3}
            autoResize={false}
            resize="vertical"
            hint={ts('library.inputs.specimens.inputs-textarea.notesHint')}
          />
          <Textarea
            label={ts('library.inputs.specimens.inputs-textarea.feedback')}
            rows={2}
            defaultValue={ts('library.inputs.specimens.inputs-textarea.feedbackValue')}
            error={ts('library.inputs.specimens.inputs-textarea.feedbackError')}
          />
          <Textarea
            label={ts('library.inputs.specimens.inputs-textarea.readOnly')}
            rows={2}
            readOnly
            defaultValue={ts('library.inputs.specimens.inputs-textarea.readOnlyValue')}
          />
        </div>
      );
    },
  },
  {
    id: 'inputs-identity',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <PasswordInput
            label={ts('library.inputs.specimens.inputs-identity.newPassword')}
            showStrength
            hint={ts('library.inputs.specimens.inputs-identity.passwordHint')}
          />
          <PhoneInput
            label={ts('library.inputs.specimens.inputs-identity.phone')}
            defaultCountry="PL"
            defaultValue="600100200"
          />
          <PhoneInput
            label={ts('library.inputs.specimens.inputs-identity.workPhone')}
            defaultCountry="US"
            defaultValue="41555"
            error={ts('library.inputs.specimens.inputs-identity.phoneError')}
          />
          <PhoneInput
            label={ts('library.inputs.specimens.inputs-identity.disabled')}
            defaultCountry="DE"
            defaultValue="15112345678"
            disabled
          />
          <OtpInput
            label={ts('library.inputs.specimens.inputs-identity.verificationCode')}
            hint={ts('library.inputs.specimens.inputs-identity.otpHint')}
          />
          <OtpInput
            label={ts('library.inputs.specimens.inputs-identity.invalid')}
            length={4}
            defaultValue="1234"
            error={ts('library.inputs.specimens.inputs-identity.otpError')}
          />
        </div>
      );
    },
  },
  {
    id: 'inputs-numeric',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      const periodLabels = {
        hourly: ts('library.inputs.specimens.inputs-numeric.periodHourly'),
        monthly: ts('library.inputs.specimens.inputs-numeric.periodMonthly'),
        yearly: ts('library.inputs.specimens.inputs-numeric.periodYearly'),
      };
      return (
        <div class={styles.stack}>
          <div class={styles.row}>
            <NumberInput
              label={ts('library.inputs.specimens.inputs-numeric.seats')}
              min={1}
              max={20}
              defaultValue={5}
              suffix={ts('library.inputs.specimens.inputs-numeric.seatsSuffix')}
            />
            <NumberInput
              label={ts('library.inputs.specimens.inputs-numeric.weight')}
              step={0.5}
              defaultValue={2.5}
              suffix="kg"
              size="sm"
            />
          </div>
          <RangeInput
            label={ts('library.inputs.specimens.inputs-numeric.salary')}
            locale="pl"
            max={SALARY_LIMIT}
            defaultValue={{ min: 10_000, max: 15_000 }}
            unitOptions={['PLN', 'EUR', 'USD']}
            defaultUnit="PLN"
            periodOptions={[periodLabels.hourly, periodLabels.monthly, periodLabels.yearly]}
            defaultPeriod={periodLabels.monthly}
            hint={ts('library.inputs.specimens.inputs-numeric.salaryHint')}
          />
          <RangeInput
            label={ts('library.inputs.specimens.inputs-numeric.area')}
            suffix="m²"
            fromLabel={ts('library.inputs.specimens.inputs-numeric.min')}
            toLabel={ts('library.inputs.specimens.inputs-numeric.max')}
            defaultValue={{ min: 40, max: 80 }}
          />
        </div>
      );
    },
  },
  {
    id: 'inputs-search-tags',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <SearchSuggestionsDemo />
          <TagInput
            label={ts('library.inputs.specimens.inputs-search-tags.skills')}
            defaultValue={['design', 'solid']}
            max={5}
            hint={ts('library.inputs.specimens.inputs-search-tags.skillsHint')}
          />
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.inputs.specimens.inputs-search-tags.editHint')}</p>
            <InlineEdit
              label={ts('library.inputs.specimens.inputs-search-tags.projectTitle')}
              defaultValue={ts('library.inputs.specimens.inputs-search-tags.projectTitleValue')}
              size="lg"
            />
            <InlineEdit label={ts('library.inputs.specimens.inputs-search-tags.owner')} defaultValue="Anna Kowalska" />
          </div>
        </div>
      );
    },
  },
  {
    id: 'inputs-file-upload',
    span: 6,
    render: () => <FileUploadDemo />,
  },
  {
    id: 'inputs-rich-text',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      const releaseNotes = ts('library.inputs.specimens.inputs-rich-text.releaseNotes');
      return (
        <div class={styles.grid}>
          <RichTextEditor
            label={ts('library.inputs.specimens.inputs-rich-text.description')}
            defaultValue={releaseNotes}
            maxLength={400}
            maxHeight={NOTES_MAX_HEIGHT_PX}
            hint={ts('library.inputs.specimens.inputs-rich-text.outputHint')}
          />
          <div class={styles.stack}>
            <RichTextEditor
              label={ts('library.inputs.specimens.inputs-rich-text.shortReply')}
              toolbar="minimal"
              minHeight={80}
              placeholder={ts('library.inputs.specimens.inputs-rich-text.replyPlaceholder')}
            />
            <RichTextEditor
              label={ts('library.inputs.specimens.inputs-rich-text.publishedNotes')}
              readOnly
              defaultValue={releaseNotes}
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'inputs-code-editor',
    span: 12,
    render: () => <CodeEditorDemo />,
  },
  {
    id: 'inputs-mention-input',
    span: 6,
    render: () => <MentionInputDemo />,
  },
  {
    id: 'inputs-signature-pad',
    span: 6,
    render: () => <SignaturePadDemo />,
  },
];
