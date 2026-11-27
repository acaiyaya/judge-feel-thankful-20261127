import { mkdirSync, writeFileSync } from 'node:fs';

const entry = 'The tea went cold beside the finished page, but the bottom of the cup was still warm when I picked it up. Someone had been sitting here, reading, in no hurry. I am glad it was you.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
