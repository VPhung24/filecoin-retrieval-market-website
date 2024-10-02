
/**
 * Module dependencies.
 */

import Airtable from 'airtable';
import head from 'lodash/head';

/**
 * Airtable configure.
 */

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY || '',
  endpointUrl: process.env.AIRTABLE_API_BASE_URL || 'https://api.airtable.com'
});

/**
 * Airtable instance.
 */

const airtable = Airtable.base(process.env.AIRTABLE_BASE_ID || '');

/**
 * Get table records.
 */

export async function getTableRecords(tableName: string) {
  try {
    const records = await airtable(tableName)
      .select({ view: 'Grid view' })
      .all();

    return records.map(record => record.fields);
  } catch (error) {
    return [];
  }
}

/**
 * Export `getRecords`.
 */

export async function getRecords() {
  const [
    content,
    settings,
    whyNow,
    whatWeDo,
    roadmap,
    teams,
    projectsOpportunities,
    progress,
    learnMore,
    event
  ] = await Promise.all([
    getTableRecords('content'),
    getTableRecords('settings'),
    getTableRecords('whyNow'),
    getTableRecords('whatWeDo'),
    getTableRecords('roadmap'),
    getTableRecords('teams'),
    getTableRecords('projectsOpportunities'),
    getTableRecords('progress'),
    getTableRecords('learnMore'),
    getTableRecords('event')
  ]);

  return {
    content: head(content) || null,
    event: head(event) || null,
    learnMore: head(learnMore) || null,
    progress: progress || null,
    projectsOpportunities: projectsOpportunities || null,
    roadmap: roadmap || null,
    settings: settings || null,
    teams: teams || null,
    whatWeDo: head(whatWeDo) || null,
    whyNow: head(whyNow) || null
  };
}
