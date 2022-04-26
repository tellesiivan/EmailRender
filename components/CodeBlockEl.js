import { CopyBlock, dracula } from "react-code-blocks";
import TdItem from "./TdItem";
import TopCode from "./TopCode";
import Footer from "./Footer";

export default function CodeBlockEl({ sections, renderHandler }) {
  const items = TdItem(sections);
  const top = TopCode();
  const footer = Footer();

  const html = `<html lang="en" class="" xmlns="http://www.w3.org/1999/xhtml">

<body data-new-gr-c-s-check-loaded="14.1057.0" data-gr-ext-installed="" bgcolor="#ffffff">







	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--<![endif]-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="x-apple-disable-message-reformatting">
	<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
        table {border-collapse: collapse;}
    </style>
<![endif]-->
	<!--[if gte mso 9]>
<style>
li {
    text-indent: -1em; /* Normalise space between bullets and text */
}
</style>
<![endif]-->
	<title></title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300" rel="stylesheet" type="text/css">
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300);

		html {
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%
		}

		body {
			margin: 0;
			padding: 0;
			-webkit-text-size-adjust: 100% !important;
			-ms-text-size-adjust: 100% !important;
			-webkit-font-smoothing: antialiased !important;
		}

		table {
			border-collapse: collapse;
			mso-table-lspace: 0px;
			mso-table-rspace: 0px;
		}

		td {
			border-collapse: collapse;
			mso-line-height-rule: exactly;
		}

		table th {
			margin: 0 !important;
			padding: 0 !important;
			vertical-align: top;
			font-weight: normal;
		}

		a {
			color: #990000
		}

		img {
			border: none
		}

		.ReadMsgBody {
			width: 100%;
		}

		.ExternalClass {
			width: 100%;
		}

		.appleLinksWhite a {
			color: #ffffff !important;
			text-decoration: none !important;
		}

		.appleLinksGray a {
			color: #c6c6c6 !important;
			text-decoration: none !important;
		}

		.ExternalClass * {
			line-height: 100%
		}

		.desktop-height-fix {
			min-height: 600px;
			height: 600px;
		}

		.desktop-height-fix-content {
			min-height: 300px;
			height: 300px;
		}

		.txtlink {
			color: #F03;
			text-decoration: none;
		}

		@media only screen and (max-width: 600px) {
			.desktop-height-fix {
				min-height: auto;
				height: auto;
			}

			.desktop-height-fix-content {
				min-height: auto;
				height: auto;
			}

			/************************************ MAIN *************************************/
			*[class].remove {
				display: none !important;
				width: 0 !important;
				height: 0 !important;
			}

			*[class].stack {
				display: block !important;
			}

			*[class].stack-header {
				display: table-header-group !important;
			}

			*[class].stack-footer {
				display: table-footer-group !important;
			}

			*[class].image-resize img {
				width: 100% !important;
				height: auto !important;
			}

			*[class].image280 img {
				width: 280px !important;
				height: auto !important;
			}

			*[class].show {
				display: block !important;
				width: 100% !important;
				max-height: inherit !important;
				overflow: visible !important;
			}

			/************************************ WIDTH RESIZERS *************************************/
			*[class].min-300 {
				min-width: 300px !important;
			}

			*[class].max-300 {
				max-width: 300px !important;
			}

			*[class].w-resize100 {
				width: 100% !important;
			}

			*[class].w-resize90 {
				width: 90% !important;
			}

			*[class].w-resize280 {
				width: 280px !important;
			}

			/************************************ HEIGHT RESIZERS *************************************/
			*[class].h-resize10 {
				height: 10px !important;
			}

			*[class].h-resize15 {
				height: 15px !important;
			}

			*[class].h-resize20 {
				height: 20px !important;
			}

			*[class].h-resize25 {
				height: 25px !important;
			}

			*[class].h-resize30 {
				height: 30px !important;
			}

			*[class].h-resize40 {
				height: 40px !important;
			}

			*[class].h-resize50 {
				height: 50px !important;
			}

			/************************************ ALIGNERS *************************************/
			*[class].left-align {
				text-align: left !important;
			}

			*[class].right-align {
				text-align: right !important;
			}

			*[class].center-align {
				text-align: center !important;
			}

			*[class].center-align img {
				margin: 0 auto !important;
			}

			*[class].center-align table {
				margin: 0 auto !important;
			}

			/************************************ TEXT *************************************/
			*[class].text13 {
				font-size: 13px !important;
				line-height: 19px !important;
			}

			*[class].text14 {
				font-size: 14px !important;
				line-height: 20px !important;
			}

			*[class].text15 {
				font-size: 15px !important;
				line-height: 21px !important;
			}

			*[class].text18 {
				font-size: 18px !important;
				line-height: 24px !important;
			}

			*[class].text20 {
				font-size: 20px !important;
				line-height: 26px !important;
			}

			/************************************ PADDING *************************************/
			*[class].padding15 {
				padding: 15px 0 !important;
			}

			/************************************ RANDOM *************************************/
			*[class].cta-center {
				margin: 0 auto !important;
				width: 100%;
			}

			*[class].cta-center td {
				width: auto !important;
				height: 42px !important;
				font-size: 15px !important;
			}

			*[class].cta-center td a {
				line-height: 42px !important;
			}

			*[class].tagline-resize img {
				width: 180px !important;
				height: auto !important;
				margin: 0 auto !important;
			}

			*[class].logo-resize img {
				width: 152px !important;
				height: auto !important;
				margin: 0 auto !important;
			}

			*[class].table-container {
				display: table !important;
			}

			*[class].footer-links {
				display: block !important;
				margin: 0 auto 25px auto !important;
			}

			*[class].padbtm {
				margin-bottom: 15px !important;
			}

			*[class].nopad {
				padding-left: 0px !important;
				padding-right: 0px !important;
			}
		}
	</style>



	<!-- PREHEADER -->
	<div style="background-color: #e9e9e9; color: #e9e9e9; font-size:0px; line-height:0px; height:0px; display: none !important;">
		Check out these new events.</div>
	<!-- END PREHEADER -->
	<!-- HEADER -->
	<table style="margin-bottom: 10px; margin-top: 10px;" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td align="center">
					<a href="http://tickets.com"><img alt="TICKETS.COM" height="65" border="0" src="https://media.whatcounts.com/tickets_marketing/template/tdot_white2.png"></a>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- END HEADER -->
	<!-- BEGIN EVENT -->
	<!-- BEGIN EVENT -->
	<!-- BEGIN EVENT -->
	<!-- HERO IMAGE -->
	<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px;" height="20">
					&nbsp;</td>
			</tr>
			<tr>
				<td class="stack">
					<a target="_blank" href="https://mpv.tickets.com/schedule/?agency=WTFV_PLAGENCY_MPV&amp;mkt_code=TEWT220402&amp;orgid=44689#/?venue=Wolf+Trap+Filene+Center%2C+Vienna%2C+VA&amp;view=list&amp;includePackages=true"><img alt="" style="display: block; border-width: 0px; border-style: solid; width: 600px;" class="w-resize90 min-300" src="https://ticketsdotcom.s3.amazonaws.com/wt_20220426.gif"></a>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- END HERO IMAGE --><br>
	<!-- MAIN CONTENT -->
	<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
		<tbody>
			<tr>
				<td class="stack" style="padding-left: 20px;padding-right: 20px; font-family:'Open Sans', Arial, sans-serif; font-size:14px; font-weight:400; line-height:20px;">
					Catch shows like Big Tony &amp; Trouble Funk, Black Violin, Gipsy Kings, Ana Gabriel, and more at Wolf Trap.</td>
			</tr>
			<tr>
				<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px;" height="20">
					&nbsp;</td>
			</tr>

			<tr>
				<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px;" height="20">
					&nbsp;</td>
			</tr>
		</tbody>
	</table>
	<!-- END MAIN CONTENT -->
	<!-- SPACER -->
	<!-- SPACER -->
	<!-- RED LINE -->
	<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td style="font-family:'Open Sans', Arial, sans-serif; font-size:26px; font-weight:700;line-height:2px;" height="2" bgcolor="#ffffff" align="center">
					<img class="w-resize100" style="display:block;" width="600" height="2" src="https://media.whatcounts.com/tickets_marketing/template/red10x10.png">
				</td>
			</tr>
		</tbody>
	</table>
	<!-- RED LINE -->
	<table class="w-resize100" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td class="stack" style="padding: 10px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:12px;">
					&nbsp;</td>
			</tr>
			<tr>
				<td align="center">
					<img style="display:block;" width="30" src="https://media.whatcounts.com/tickets_marketing/template/dot.png">
				</td>
			</tr>
			<tr>
				<td class="stack" style="padding: 10px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:12px;">
					&nbsp;</td>
			</tr>
		</tbody>
	</table>
	<!-- end red line -->
	<!-- end red line -->
	<!-- END SPACER -->
	<!-- END EVENT -->
	<!-- END EVENT -->
	<!-- END EVENT -->
	<!-- BEGIN TEXT STORY -->
	<!-- MAIN CONTENT -->
	<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
		<tbody>
			<tr>
				<td class="stack" style=" font-family:'Open Sans', Arial, sans-serif; font-size:26px; font-weight:700; line-height:40px;" align="center">
					Featured Upcoming Performances</td>
			</tr>
			<tr>
				<td class="stack" style="padding-left: 20px; padding-right: 20px;font-family:'Open Sans', Arial, sans-serif; font-size:13px; font-weight:400; line-height:20px;color:#6a6a6a;" align="center">
					<a class="txtlink" href="https://mpv.tickets.com/schedule/?agency=WTFV_PLAGENCY_MPV&amp;mkt_code=TEWT220402&amp;orgid=44689#/?venue=Wolf+Trap+Filene+Center%2C+Vienna%2C+VA&amp;view=list&amp;includePackages=true">Full Calendar</a>
				</td>
			</tr>
			<tr>
				<td class="stack" style="padding: 10px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:12px;">
					&nbsp;</td>
			</tr>
		</tbody>
	</table>
	<table class="w-resize90 min-300" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ededed" align="center">
		<tbody>
			<tr>
				<td height="20" bgcolor="#ededed">
					&nbsp;</td>
			</tr>



			<tr>
				<td class="paint-area" align="center">
					<table class="w-resize90" width="560" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
						<tbody>
							<tr>
								<td bgcolor="#ffffff">
									&nbsp;</td>
								<td bgcolor="#ffffff">
									&nbsp;</td>
								<td bgcolor="#ffffff">
									&nbsp;</td>
							</tr>
								${items}
							<tr>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>

			<tr>
				<td class="paint-area" align="center">
					<table class="w-resize90" width="560" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
						<tbody>
							<tr>
								<td bgcolor="#ffffff">
									&nbsp;</td>
								<td bgcolor="#ffffff">
									&nbsp;</td>
								<td bgcolor="#ffffff">
									&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td class="paint-area" align="center">
					&nbsp;</td>
			</tr>
			<tr>
				<td height="20">
					&nbsp;</td>
			</tr>
		</tbody>
	</table>
	<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
			<tbody>
				<tr>
					<td style="font-family:'Open Sans', Arial, sans-serif; font-size:26px; font-weight:700;line-height:2px;" height="2" bgcolor="#ffffff" align="center">
						<img class="w-resize100" style="display:block;" width="600" height="2" src="https://media.whatcounts.com/tickets_marketing/template/red10x10.png" /></td>
				</tr>
			</tbody>
		</table>
		<!-- !-- END MAIN CONTENT --><!-- RED LINE -->
		<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
			<tbody>
				<tr>
					<td style="font-family:'Open Sans', Arial, sans-serif; font-size:26px; font-weight:700;line-height:2px;" height="2" bgcolor="#ffffff" align="center">
						<img class="w-resize100" style="display:block;" width="600" height="2" src="https://media.whatcounts.com/tickets_marketing/template/red10x10.png" /></td>
				</tr>
			</tbody>
		</table>
		<!-- RED LINE -->
		<table class="w-resize100" cellspacing="0" cellpadding="0" border="0" align="center">
			<tbody>
				<tr>
					<td class="stack" style="padding: 10px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:12px;">
						 </td>
				</tr>
				<tr>
					<td align="center">
						<img style="display:block;" width="30" src="https://media.whatcounts.com/tickets_marketing/template/dot.png" /></td>
				</tr>
				<tr>
					<td class="stack" style="padding: 10px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:12px;">
						 </td>
				</tr>
			</tbody>
		</table>
		<!-- end red line --><!-- end red line --><!-- END SPACER --><!-- END EVENT --><!-- END EVENT --><!-- END EVENT --><!-- BEGIN TEXT STORY --><!-- MAIN CONTENT --><!-- END MAIN CONTENT --><!-- RED LINE --><!-- end red line --><!-- end red line --><!-- END SPACER --><!-- END EVENT --><!-- END EVENT --><!-- END EVENT --><!-- BEGIN TEXT STORY --><!-- MAIN CONTENT --><br />
		<!-- END MAIN CONTENT --><!-- RED LINE --><!-- RED LINE --><!-- RED LINE --><!-- end red line --><!-- MAIN CONTENT -->
		<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
			<tbody>
				<tr>
					<td class="stack" style="padding-left: 20px; padding-right: 20px; font-family:'Open Sans', Arial, sans-serif; font-size:26px; font-weight:700; line-height:40px;" align="center">
						Tell Us More</td>
				</tr>
				<tr>
					<td style="padding: 20px; font-family:'Open Sans', Arial, sans-serif; font-size:14px; font-weight:400; line-height:20px;" align="center">
						Please take a moment to select what events you are most interested in.<br />
						<br />
						<table class="w-resize100" style="border:1px solid #df1e26; border-collapse:collapse;" width="200" cellspacing="0" cellpadding="0" border="0" align="center">
							<tbody>
								<tr>
									<td class="w-resize100" style="font-family:'Open Sans', Arial, sans-serif; font-size:14px; color:#df1e26; display:block; vertical-align:middle; font-weight:600; -webkit-text-size-adjust: none;" width="200" height="30" bgcolor="#ffffff" align="center">
										<a target="_blank" style="color:#df1e26; text-decoration:none; display:inline-block; width:100%; line-height:30px" href="%%PREFSITE%%sid=12:398">UPDATE YOUR PROFILE</a></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- END MAIN CONTENT --><!-- END TEXT STORY -->
		<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
			<tbody>
				<tr>
					<td class="stack" style="padding: 20px; font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px;">
						 </td>
				</tr>
			</tbody>
		</table>
		<!-- BRANDING -->
		<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
			<tbody>
				<tr>
					<th class="stack w-resize100" align="center">
						<a href="http://tickets.com"><img alt="TICKETS.COM" class="nopad" width="400" height="" border="0" src="https://media.whatcounts.com/tickets_marketing/2021/B2CEmailFooter.png" /></a></th>
				</tr>
			</tbody>
		</table>
		<!-- END BRANDING -->
		<table class="w-resize100" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
			<tbody>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px;">
						 </td>
				</tr>
			</tbody>
		</table>
		<!-- FOOTER -->
		<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#262626" align="center0">
			<tbody>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px; color:#ffffff; padding: 10px;" align="center">
						 </td>
				</tr>
				<tr>
					<td>
						 </td>
				</tr>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px; color:#ffffff; padding: 10px;" align="center">
						You have received this message as a Tickets.com registered user or purchaser.<br />
						We aim to inform you of upcoming events, presales, and more in your area.</td>
				</tr>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px; color:#ffffff; padding: 10px;" align="center">
						<a style="color: #ffffff; text-decoration: none;" href="%%DISPLAY_MSG%%">View on Web</a> | <a style="color: #ffffff; text-decoration: none;" href="%%PREFSITE%%sid=12:398">Update Profile</a> | <a style="color: #ffffff; text-decoration: none;" href="%%UNSUB_HREF%%">Unsubscribe</a></td>
				</tr>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; font-weight:400; line-height:18px; color:#ffffff; padding: 10px;" align="center">
						Copyright © Tickets.com. All rights reserved.<br />
						535 Anton Blvd. Suite 250 Costa Mesa, CA 92626</td>
				</tr>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; color:#ffffff;" align="center">
						<br />
						<table class="w-resize280" width="150" cellspacing="0" cellpadding="0" border="0" align="center">
							<tbody>
								<tr>
									<td style="width: 50px;" width="50" align="center">
										<a style="color: #ffffff; text-decoration: none;" href="https://www.facebook.com/Ticketsdotcom/"><img style="display: inline-block; padding: 10px;" src="http://media.whatcounts.com/tickets_provenue/2020/soical_transparent_FB.png" /></a></td>
									<td style="width: 50px;" width="50" align="center">
										<a style="color: #ffffff; text-decoration: none;" href="https://twitter.com/Ticketsdotcom"><img style="display: inline-block; padding: 10px;" src="http://media.whatcounts.com/tickets_provenue/2020/soical_transparent_TW.png" /></a></td>
									<td style="width: 50px;" width="50" align="center">
										<a style="color: #ffffff; text-decoration: none;" href="https://www.instagram.com/Ticketsdotcom/"><img style="display: inline-block; padding: 10px;" src="http://media.whatcounts.com/tickets_provenue/2020/soical_transparent_IG.png" /></a></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; color:#ffffff;" align="center">
						<br />
						<table class="w-resize280" width="500" cellspacing="0" cellpadding="0" border="0" align="center">
							<tbody>
								<tr>
									<td class="stack" style="font-family:'Open Sans', Arial, sans-serif; font-size:10px; font-weight:400; line-height:18px; color:#ffffff; padding: 10px;" align="center">
										 </td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- END FOOTER -->
	<!-- FIXES GMAIL DISPLAY ISSUES -->
	<table class="remove" width="640" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
			<tr>
				<td>
					<img alt="" style="display:block; min-height:1px; max-height:1px; width:640px; min-width:640px;" width="640" height="1" src="http://media.whatcounts.com/whatcounts_knickoles/160307_Modular_Template/spcr.gif">
				</td>
			</tr>
		</tbody>
	</table>

	<!-- FIXES GMAIL DISPLAY ISSUES -->
	<!------------------------------------------------------------------------->
	<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>

</body></html>`;

  return (
    <div className="codeBlockH">
      <button className="close" onClick={() => renderHandler(false)}>
        Close CodeBlock
      </button>
      <CopyBlock
        text={html}
        className="cblock"
        CodeBlock={true}
        theme={dracula}
        language="html"
        showLineNumbers={false}
        wrapLongLines={true}
        customStyle={{
          height: "100vh",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
