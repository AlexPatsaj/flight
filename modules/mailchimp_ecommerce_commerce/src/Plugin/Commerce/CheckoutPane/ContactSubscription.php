<?php

namespace Drupal\mailchimp_ecommerce_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\Core\Form\FormStateInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;

/**
 * Provides the subscription information pane.
 *
 * @CommerceCheckoutPane(
 *   id = "subscription_information",
 *   label = @Translation("Subscription information"),
 *   default_step = "order_information",
 *   wrapper_element = "fieldset",
 * )
 */
class ContactSubscription extends CheckoutPaneBase implements CheckoutPaneInterface {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationSummary() {
    $summary = '';

    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function isVisible() {

  return true;
}

  /**
   * {@inheritdoc}
   */
  public function buildPaneSummary() {
    $pane_form['subscription'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Subscribe'),
      '#default_value' => '',
      '#required' => FALSE,
    ];

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['subscription'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Subscribe'),
      '#default_value' => '',
      '#required' => FALSE,
    ];

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function validatePaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {

  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $values = $form_state->getValue($pane_form['#parents']);

    if($values['subscription'] == 1) {
      $customer = [];
      $customer['email_address'] = $this->order->getEmail();

      if (!empty($customer['email_address'])) {
        /* @var \Drupal\mailchimp_ecommerce\CustomerHandler $customer_handler */
        $customer_handler = \Drupal::service('mailchimp_ecommerce.customer_handler');

        $billing_profile = $this->order->getBillingProfile();
        $customer = $customer_handler->buildCustomer($customer, $billing_profile);
        $customer_handler->addOrUpdateCustomer($customer);

        module_load_include('module', 'mailchimp', 'mailchimp');

        $list_id = mailchimp_ecommerce_get_list_id();

        $merge_vars = [
          'EMAIL' => $customer['email_address'],
          'FNAME' => $customer['first_name'],
          'LNAME' => $customer['last_name'],
        ];

        mailchimp_subscribe($list_id, $customer['email_address'], $merge_vars);
      }
    }
  }

}
