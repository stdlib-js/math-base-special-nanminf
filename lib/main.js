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

var minf = require( '@stdlib/math-base-special-minf' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );


// MAIN //

/**
* Return the minimum value of two single-precision floating-point numbers, ignoring NaN.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} minimum value
*
* @example
* var v = nanminf( 3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = nanminf( 4.14, NaN );
* // returns 4.14
*
* @example
* var v = nanminf( NaN, NaN );
* // returns NaN
*/
function nanminf( x, y ) {
	if ( isnanf( x ) ) {
		return ( isnanf( y ) ) ? NaN : y;
	}
	return ( isnanf( y ) ) ? x : minf( x, y );
}


// EXPORTS //

module.exports = nanminf;
