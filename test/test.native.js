/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var nanminf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( nanminf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanminf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if both operands are `NaN`', opts, function test( t ) {
	var v;

	v = nanminf( NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the non-NaN value if one of the operands is `NaN`', opts, function test( t ) {
	var v;

	v = nanminf( NaN, float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( 3.14 ), 'returns expected value' );

	v = nanminf( float64ToFloat32( 4.2 ), NaN );
	t.strictEqual( v, float64ToFloat32( 4.2 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum value', opts, function test( t ) {
	var v;

	v = nanminf( float64ToFloat32( 5.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( 3.14 ), 'returns expected value' );

	v = nanminf( float64ToFloat32( -4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( -4.2 ), 'returns expected value' );

	t.end();
});