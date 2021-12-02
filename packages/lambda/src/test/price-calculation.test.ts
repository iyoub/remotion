import {estimatePriceFromBucket} from '../functions/helpers/calculate-price-from-bucket';

test('Should not throw while calculating prices when time shifts occur', () => {
	const aDate = Date.now();
	process.env.AWS_REGION = 'us-east-1';

	const price = estimatePriceFromBucket({
		contents: [
			{
				Key: 'renders/123/out.mp4',
				// Render date is before start date. It can happen if Lambda function is out of date
				LastModified: new Date(aDate - 10000),
			},
		],
		bucketName: 'my-bucket',
		memorySizeInMb: 1024,
		renderMetadata: {
			codec: 'h264',
			compositionId: 'react-svg',
			estimatedRenderLambdaInvokations: 10,
			estimatedTotalLambdaInvokations: 10,
			framesPerLambda: 10,
			imageFormat: 'jpeg',
			inputProps: {},
			lambdaVersion: '2021-11-29',
			memorySizeInMb: 1024,
			region: 'eu-central-1',
			renderId: '123',
			siteId: 'my-site',
			startedDate: aDate + 1000,
			totalChunks: 20,
			type: 'video',
			usesOptimizationProfile: true,
			videoConfig: {
				durationInFrames: 100,
				fps: 30,
				height: 1080,
				id: 'react-svg',
				width: 1080,
			},
		},
	});
	expect(price).toBeGreaterThanOrEqual(0);
});