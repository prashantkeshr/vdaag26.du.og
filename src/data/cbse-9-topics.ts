export { cbse9ScienceTopicsData } from './cbse-9-topics-science';
export { cbse9MathsTopicsData } from './cbse-9-topics-maths';
export { cbse9SocialTopicsData } from './cbse-9-topics-social';

import { cbse9ScienceTopicsData } from './cbse-9-topics-science';
import { cbse9MathsTopicsData } from './cbse-9-topics-maths';
import { cbse9SocialTopicsData } from './cbse-9-topics-social';

export const cbse9TopicsData = [
  ...cbse9ScienceTopicsData,
  ...cbse9MathsTopicsData,
  ...cbse9SocialTopicsData,
];
