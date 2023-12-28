import React from 'react';
import { Card } from '.';
import { render } from '@testing-library/react';

describe('Card Tests', () => {
  test('should render', async () => {
    const card = render(
      <Card icon={<div />} title='Heading'>
        test
      </Card>
    );
    expect(card).toBeTruthy();
    const heading = await card.findByRole('heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toBe('Heading');
    const content = await card.findByRole('contentinfo');
    expect(content).toBeTruthy();
    expect(content?.textContent).toBe('test');
  });
});
