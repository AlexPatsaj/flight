<?php

namespace Drupal\mailchimp_ecommerce_ubercart;

/**
 * Batch process handler for syncing product data to MailChimp.
 */
class BatchSyncProducts {

  public static function syncProducts($product_ids, &$context) {
    if (!isset($context['sandbox']['progress'])) {
      $context['sandbox']['progress'] = 0;
      $context['sandbox']['total'] = count($product_ids);
      $context['results']['product_ids'] = $product_ids;
    }

    $config = \Drupal::config('mailchimp.settings');
    $batch_limit = $config->get('batch_limit');

    $batch = array_slice($context['results']['product_ids'], $context['sandbox']['progress'], $batch_limit);

    foreach ($batch as $product_id) {

      $product = $node = Node::load($product_id);

      $title = (!empty($product->get('title')->value)) ? $product->get('title')->value : '';
      $description = (!empty($product->get('body')->value)) ? $product->get('body')->value : '';
      $type = (!empty($product->get('type')->value)) ? $product->get('type')->value : '';

      /** @var \Drupal\mailchimp_ecommerce\ProductHandler $product_handler */
      $product_handler = \Drupal::service('mailchimp_ecommerce.product_handler');

      $variants = $product_handler->buildProductVariants($product);

      // TODO: Replace with add or update product function to avoid duplicates.
      $product_handler->addProduct($product_id, $title, $description, $type, $variants);

      $context['sandbox']['progress']++;

      $context['message'] = t('Sent @count of @total products to MailChimp', [
        '@count' => $context['sandbox']['progress'],
        '@total' => $context['sandbox']['total'],
      ]);

      $context['finished'] = ($context['sandbox']['progress'] / $context['sandbox']['total']);
    }
  }

}
