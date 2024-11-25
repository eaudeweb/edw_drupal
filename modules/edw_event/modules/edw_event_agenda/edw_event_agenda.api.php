<?php

/**
 * @file
 * Hooks and documentation related to the event agenda.
 */

/**
 * Alter Document Agenda redirect route.
 *
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 *   The form state.
 * @param \Symfony\Component\HttpFoundation\Request $request
 *   The current request.
 * @param string $route
 *   The route to redirect to.
 * @param array $options
 *   The options to pass to the route.
 */
function hook_meeting_document_form_alter_route_redirect($form_state, $request, &$route, &$options) {
}
