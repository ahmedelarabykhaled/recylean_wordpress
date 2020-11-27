<div class="bg-warning">
    <div class="container">
        <div class="row">
            <div class="col-2">
                <img class="info-left-arrow" src="<?= $instance['first_image_url'] ?>"
                     alt="">
            </div>
            <div class="col-1 text-center">
                <img src="<?= $instance['second_image_url'] ?>" alt="" class="mt-4">
            </div>
            <div class="col-8">
                <h3 class="mb-0 info-bar">
                    <?= $instance['title'] ?>
                </h3>
                <h4>
                    <p>
                        <?= $instance['description'] ?> <a
                            href="<?= $instance['url_link'] ?>"><?= $instance['text_link'] ?></a>
                    </p>
                </h4>
            </div>
        </div>
    </div>
</div>
