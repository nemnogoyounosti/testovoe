import $ from 'jquery'

import {Test} from './test'
import {Burger} from './custom-ui/burger'
import {FloatContainer} from './custom-ui/float-container'

$(document).ready(() => {


	$('[modal-id]').each((_, v) => {
		const btn = $(v)
		const modalSelector = btn.attr('modal-id')
		const closeSelector = btn.attr('close-btn-id')
		btn.click(() => {
			$(modalSelector).attr('show', 'yes')
		})
		$(`${modalSelector} ${closeSelector}`).click(() => {
			$(modalSelector).attr('show', 'no')
		})
		$(modalSelector).click(function(e) {
			if ($(e.target).is(modalSelector)) {
				$(modalSelector).attr('show', 'no')
			}
		})
	})
})