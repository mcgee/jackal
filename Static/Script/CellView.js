(function () {

    if (!window.Jackal) {
        window.Jackal = {};
    }

    window.Jackal.CellView = function (model) {
        var pThis = this,
            $node;

        pThis.render = render;
        pThis.getPiratePosition = getPiratePosition;
        pThis.getOffset = getOffset;

        function render() {
            $node = $('<div class="cell" />');
            $node.attr('id', model.id);

            return $node;
        }

        /*
         returns {
             coords: [px, px],
             size: [px, px]
         }
         or undefined if pirate is not on the field
         */
        function getPiratePosition(pirateId, neighbourPirateIds) {
            // todo:
            var defaultPirateWidth = 30;
            var defaultPirateHeight = 30;

            return {
                coords: [
                    $node.width() / 2 - defaultPirateWidth / 2,
                    $node.height() / 2 - defaultPirateHeight / 2
                ],
                size: [defaultPirateWidth, defaultPirateHeight]
            };
        }

        function getOffset() {
            var offset = $node.offset();
            return [offset.left, offset.top];
        }
    }

})();