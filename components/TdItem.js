import React from "react";

export default function TdItem(sections) {
  let x = [];
  sections.map((section) => {
    let y = "";
    y = `			<tr>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
							</tr>
							<tr>
								<th class="stack w-resize100" width="275" valign="center" align="center">
									<table class="w-resize90" width="280" cellspacing="0" cellpadding="10" border="0" align="center">
										<tbody>
											<tr>
												<td valign="center" align="center">
													<a target="_blank" href="https://mpv.tickets.com/?agency=WTFV_PLAGENCY_MPV&amp;orgid=44689&amp;pid=9073079&amp;mkt_code=WOLFTRAP&amp;_ga=2.44401636.1304167243.1650390874-2019181900.1631132090#/event/9073079/seatmap/?selectBuyers=false&amp;minPrice=47&amp;maxPrice=152&amp;quantity=1&amp;sort=price_desc&amp;ada=false&amp;seatSelection=true&amp;onlyCoupon=true&amp;onlyVoucher=false"><img alt="" style="display: block; border-width: 0px; border-style: solid; width: 250px; height: 159px;" width="250" src="https://media.whatcounts.com/tickets_marketing/2022/Master-of-the-Mic.jpg"></a>
												</td>
											</tr>
										</tbody>
									</table>
								</th>
								<th class="stack w-resize100" style="font-size:0px; line-height:0px" width="28">
									&nbsp;</th>
								<th class="stack w-resize100" width="275" valign="top">
									<table class="w-resize90" width="275" cellspacing="0" cellpadding="3" border="0" align="center">
										<tbody>
											<tr>
												<td style="font-family:Arial, Helvetica, sans-serif;  color:#555555; font-size:16px;" valign="top" align="left">
													<b>Masters of the Mic</b><br>
													<span style="color:#000000;"><span style="font-size:20px;"><span style="font-family:Open Sans,Arial,Helvetica,sans-serif;"><strong>Rakim &amp; DJ Jazzy Jeff, Slick Rick, Da Brat, Big Daddy Kane, Treach of Naughty by Nature &amp; Talib Kweli</strong></span></span></span>
												</td>
											</tr>
											<tr>
												<td style="font-family:Arial, Helvetica, sans-serif; color:#888888; font-size:15px; line-height:1.4" align="center">
													<p style="margin: 0px; line-height: 1.4; text-align: left;">
														<span style="color:#000000;"><span style=" font-family:'Open Sans', Arial, sans-serif; font-size:14px; font-weight:400; line-height:20px;">
																<font class="paint-area paint-area--text">Friday, July 1</font>
															</span></span>
													</p>
													<div style="text-align: left;">
														&nbsp;</div>
												</td>
												<td style="font-family:Arial, Helvetica, sans-serif; color:#888888; font-size:15px; line-height:1.4" align="center">
													&nbsp;</td>
											</tr>
											<tr>
												<td>
													<table width="150" height="30" bgcolor="#df1e26">
														<tbody>
															<tr>
																<td align="center">
																	<a style="font-family:'Open Sans', Arial, sans-serif; font-size:14px; color:#df1e26; vertical-align:middle; font-weight:600; -webkit-text-size-adjust: none;display:inline-block;background-color:#df1e26;padding:5px 15px;color:#ffffff;text-decoration:none;font-size:14px;" href="https://mpv.tickets.com/?agency=WTFV_PLAGENCY_MPV&amp;orgid=44689&amp;pid=9073079&amp;mkt_code=WOLFTRAP&amp;_ga=2.44401636.1304167243.1650390874-2019181900.1631132090#/event/9073079/seatmap/?selectBuyers=false&amp;minPrice=47&amp;maxPrice=152&amp;quantity=1&amp;sort=price_desc&amp;ada=false&amp;seatSelection=true&amp;onlyCoupon=true&amp;onlyVoucher=false">Buy Tickets</a>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</th>
							</tr>
							<tr>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
								<td height="15" bgcolor="#ffffff">
									&nbsp;</td>
							</tr>`;

    return x.push(y);
  });

  return x.join("\r\n");
}
