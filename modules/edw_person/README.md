# Person module

Enable the person module to provide content managers with the ability to manage people within Drupal.

## Installation

1. Install the `edw_modules` suite using composer as instructed in the main module documentation
2. Enable the module using drush: `drush en edw_person`

### Fields

| Field label | Field name      | Description                                | Field type       | Cardinality | Required | Translatable | Widget     |
|-------------|-----------------|--------------------------------------------|------------------|-------------|----------|--------------|------------|
| Title       | title           |                                            | Text             | Single      | Yes      | Yes          | Text field |
| Body        | body            |                                            | -                | -           | -        | -            | -          |
| Countries   | field_countries | Taxonomy term entity reference (Countries) | Entity reference | Single      | No       | No           | Select     |
| Website     | field_website   |                                            | Link             | Single      | No       | No           | TODO       |
| Email       | field_email     |                                            | Email            | Single      | No       | No           | TODO       |

### Taxonomies

None

### Paragraphs

TODO (add links etc.): Use the `edw_paragraphs` module to enable different visual components that can be added to the meeting sections.
TODO: Use [countries_import](https://www.drupal.org/project/countries_import) module to import Geographical coverage.
