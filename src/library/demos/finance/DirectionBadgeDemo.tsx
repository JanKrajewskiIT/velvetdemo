import { DirectionBadge, Stack } from '@jankrajewskiit/ui';

export const DirectionBadgeDemo = () => (
  <Stack gap={5}>
    <Stack direction="row" wrap>
      <DirectionBadge direction="long" icon />
      <DirectionBadge direction="short" icon />
      <DirectionBadge direction="hold" icon />
      <DirectionBadge direction="no_trade" icon />
    </Stack>
    <Stack direction="row" wrap>
      <DirectionBadge direction="buy" variant="soft" suffix="GLBX" icon />
      <DirectionBadge direction="sell" variant="outline" size="sm" icon />
      <DirectionBadge direction="add" variant="soft" icon />
      <DirectionBadge direction="trim" variant="outline" icon />
    </Stack>
  </Stack>
);
