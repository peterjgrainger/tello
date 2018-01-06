import test from 'ava';
import {alexaApp} from './alexa-app';


test((t) => {
	t.is(!!alexaApp, true);
	t.is(alexaApp.name, 'Skill');
});