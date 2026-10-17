'use strict';
const assert = require('node:assert/strict');
const EPS0 = 8.8541878128e-12;
const C = (A,d,er=1)=>EPS0*er*A/d;
const CeqSeries = values => 1/values.reduce((s,v)=>s+1/v,0);
const CeqParallel = values => values.reduce((s,v)=>s+v,0);
const close = (actual, expected, rel=1e-9) => assert.ok(Math.abs(actual-expected) <= Math.max(Math.abs(expected)*rel,1e-15), `${actual} != ${expected}`);
// Default parallel-plate simulator state: 100 cm², 2 mm, air, 12 V.
const c=C(100e-4,2e-3,1), q=c*12, u=.5*c*12**2, e=12/2e-3;
close(c,4.4270939064e-11); close(q,5.31251268768e-10); close(u,3.187507612608e-9); close(e,6000);
// Dielectric scales C and Q linearly at fixed V; energy scales linearly in C.
close(C(0.01,0.002,3.9)/c,3.9); close((C(0.01,0.002,3.9)*12)/q,3.9);
// Series and parallel values used in learning material / quiz.
close(CeqSeries([6,3]),2); close(CeqParallel([5,10,15]),30); close(CeqSeries([6,12]),4);
// Quiz arithmetic keys.
close(4*10,40); close(.5*20e-6*10**2,0.001); close(CeqSeries([6,12])*18,72); close(24/0.003,8000);
console.log('PASS: default simulation C/Q/U/E');
console.log('PASS: dielectric scaling');
console.log('PASS: series and parallel equivalent capacitance');
console.log('PASS: selected quiz answer arithmetic');
