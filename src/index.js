import * as log from 'loglevel';
import React from 'react';
import ReactDOM from 'react-dom';
import RenderUI from './js/components/index'

log.setDefaultLevel("trace")
//log.setDefaultLevel("warn")

RenderUI();
