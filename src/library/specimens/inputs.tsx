import {
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
const BIO_LIMIT = 160;
const SALARY_LIMIT = 100_000;
const NOTES_MAX_HEIGHT_PX = 240;

const validateEmail = (value: string) => (EMAIL_PATTERN.test(value) ? undefined : 'Enter a valid email address');

const RELEASE_NOTES =
  '<h2>Release notes</h2><p>Try <strong>bold</strong>, <em>italic</em> or <code>code</code>, or type <code>- </code> to start a list.</p><ul><li>Markdown shortcuts</li><li>Undo and redo</li></ul>';

export const inputSpecimens: readonly Specimen<SpecimenIdOf<typeof inputsEn>>[] = [
  {
    id: 'inputs-input',
    span: 8,
    render: () => (
      <div class={styles.grid}>
        <Input label="Full name" hint="As shown on your ID" placeholder="Anna Kowalska" />
        <Input label="Company" optional placeholder="Velvet Studio" />
        <Input label="Search" iconLeft="search" placeholder="Find anything" />
        <Input label="Website" prefix="https://" suffix=".com" placeholder="velvet" />
        <Input label="Email" placeholder="you@velvet.example" validate={validateEmail} hint="Validated on blur" />
        <Input label="Nickname" maxLength={NICKNAME_LIMIT} showCount hint="Shown on your profile" />
        <Input size="sm" label="Small" placeholder="sm" />
        <Input size="lg" label="Large" placeholder="lg" />
        <Input label="Username" error="This username is taken" defaultValue="anna" />
        <Input label="Disabled" disabled value="Locked" />
        <Input label="Read only" readOnly value="Copy me" />
      </div>
    ),
  },
  {
    id: 'inputs-textarea',
    span: 4,
    render: () => (
      <div class={styles.stack}>
        <Textarea
          label="Bio"
          autoResize
          rows={2}
          maxRows={6}
          maxLength={BIO_LIMIT}
          showCount
          placeholder="Tell us about yourself"
        />
        <Textarea label="Notes" rows={3} autoResize={false} resize="vertical" hint="Manual resize handle" />
      </div>
    ),
  },
  {
    id: 'inputs-identity',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <PasswordInput label="New password" showStrength hint="Use at least 12 characters" />
        <PhoneInput label="Phone" defaultCountry="PL" />
        <OtpInput label="Verification code" hint="Pasting a full code works too" />
      </div>
    ),
  },
  {
    id: 'inputs-numeric',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.row}>
          <NumberInput label="Seats" min={1} max={20} defaultValue={5} suffix="seats" />
          <NumberInput label="Weight" step={0.5} defaultValue={2.5} suffix="kg" size="sm" />
        </div>
        <RangeInput
          label="Salary"
          locale="pl"
          max={SALARY_LIMIT}
          defaultValue={{ min: 10_000, max: 15_000 }}
          unitOptions={['PLN', 'EUR', 'USD']}
          defaultUnit="PLN"
          periodOptions={['Hourly', 'Monthly', 'Yearly']}
          defaultPeriod="Monthly"
          hint="Leave a bound empty for an open range"
        />
        <RangeInput label="Area" suffix="m²" fromLabel="Min" toLabel="Max" defaultValue={{ min: 40, max: 80 }} />
      </div>
    ),
  },
  {
    id: 'inputs-search-tags',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <SearchSuggestionsDemo />
        <TagInput label="Skills" defaultValue={['design', 'solid']} max={5} hint="Press Enter or comma to add" />
        <div class={styles.group}>
          <p class={styles.caption}>Click a value to edit it</p>
          <InlineEdit label="Project title" defaultValue="Velvet design system" size="lg" />
          <InlineEdit label="Owner" defaultValue="Anna Kowalska" />
        </div>
      </div>
    ),
  },
  {
    id: 'inputs-file-upload',
    span: 6,
    render: () => <FileUploadDemo />,
  },
  {
    id: 'inputs-rich-text',
    span: 12,
    render: () => (
      <div class={styles.grid}>
        <RichTextEditor
          label="Description"
          defaultValue={RELEASE_NOTES}
          maxLength={400}
          maxHeight={NOTES_MAX_HEIGHT_PX}
          hint="Output is allow-listed HTML"
        />
        <div class={styles.stack}>
          <RichTextEditor label="Short reply" toolbar="minimal" minHeight={80} placeholder="Write a reply" />
          <RichTextEditor label="Published notes" readOnly defaultValue={RELEASE_NOTES} />
        </div>
      </div>
    ),
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
