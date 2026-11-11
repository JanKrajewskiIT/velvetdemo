import { DirectionBadge, Stack } from '@jankrajewskiit/ui';

export const DirectionBadgeDemo = () => (
  <Stack gap={5}>
    <Stack direction="row" wrap>
      <DirectionBadge direction="up" icon />
      <DirectionBadge direction="down" icon />
      <DirectionBadge direction="flat" icon />
      <DirectionBadge direction="muted" icon />
    </Stack>
    <Stack direction="row" wrap>
      <DirectionBadge direction="up" variant="soft" suffix="GLBX" icon />
      <DirectionBadge direction="down" variant="outline" size="sm" icon />
      <DirectionBadge direction="flat" variant="soft" icon />
      <DirectionBadge direction="muted" variant="outline" icon />
    </Stack>
  </Stack>
);
