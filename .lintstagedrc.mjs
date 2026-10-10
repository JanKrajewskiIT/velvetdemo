import { createLintStagedConfig } from '@jankrajewskiit/configs/lint-staged';

const MAX_FILES_PER_COMMAND = 30;

// cmd.exe caps a command line at 8191 characters and lint-staged's own chunking overshoots it with long quoted paths.
const inChunks = (command) => (files) => {
  const commands = [];
  for (let start = 0; start < files.length; start += MAX_FILES_PER_COMMAND) {
    const chunk = files.slice(start, start + MAX_FILES_PER_COMMAND).map((file) => `"${file}"`);
    commands.push(`${command} ${chunk.join(' ')}`);
  }
  return commands;
};

const preset = createLintStagedConfig();

export default Object.fromEntries(Object.entries(preset).map(([glob, commands]) => [glob, commands.map(inChunks)]));
