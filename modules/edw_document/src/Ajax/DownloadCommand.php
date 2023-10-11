<?php

namespace Drupal\edw_document\Ajax;

use Drupal\Core\Ajax\CommandInterface;

/**
 * An AJAX command for download files via ajax.
 */
class DownloadCommand implements CommandInterface {

  /**
   * The path of the file.
   *
   * @var string
   */
  protected $filePath;

  /**
   * {@inheritdoc}
   */
  public function __construct($filePath) {
    $this->filePath = $filePath;
  }

  /**
   * {@inheritdoc}
   */
  public function render() {
    return [
      'command' => 'downloadFileCommand',
      'filePath' => $this->filePath,
    ];
  }

}
